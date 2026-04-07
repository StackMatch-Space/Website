"use client";

import { type FormEvent, useEffect, useRef } from "react";
import { useWaitlist } from "@/components/providers/waitlist-provider";
import { cn } from "@/lib/utils";

export interface EmailCaptureFormProps {
  submitLabel: string;
  layout?: "hero" | "waitlist" | "final";
  className?: string;
}

export function EmailCaptureForm({
  submitLabel,
  layout = "hero",
  className,
}: EmailCaptureFormProps) {
  const {
    email,
    setEmail,
    isResolvedForCurrentEmail,
    resolvedState,
    isSubmitting,
    submitError,
    showInvalid,
    submitWaitlist,
    checkRegistered,
  } = useWaitlist();

  const blurTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (blurTimerRef.current) clearTimeout(blurTimerRef.current);
    };
  }, []);

  function scheduleLookup(): void {
    if (blurTimerRef.current) clearTimeout(blurTimerRef.current);
    blurTimerRef.current = setTimeout(() => {
      blurTimerRef.current = null;
      void checkRegistered(email);
    }, 450);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    await submitWaitlist();
  }

  if (isResolvedForCurrentEmail && resolvedState === "subscribed") {
    return (
      <p
        className={cn(
          "w-full font-body text-base font-medium text-accent",
          layout === "hero" && "text-center md:text-left",
          layout !== "hero" && "text-center",
        )}
        role="status"
      >
        You&apos;re on the list! We&apos;ll be in touch soon. ✓
      </p>
    );
  }

  if (isResolvedForCurrentEmail && resolvedState === "already_registered") {
    return (
      <p
        className={cn(
          "w-full font-body text-base font-medium text-accent",
          layout === "hero" && "text-center md:text-left",
          layout !== "hero" && "text-center",
        )}
        role="status"
      >
        This email is already on the waitlist. You&apos;re all set! ✓
      </p>
    );
  }

  const isStacked =
    layout === "waitlist" || layout === "final"
      ? "flex-col md:flex-row"
      : "flex-col md:flex-row";

  return (
    <div
      className={
        layout === "waitlist" || layout === "final"
          ? "mx-auto w-full max-w-[480px]"
          : undefined
      }
    >
      <form
        onSubmit={(e) => void handleSubmit(e)}
        className={cn(
          "flex gap-2.5",
          isStacked,
          layout === "waitlist" || layout === "final"
            ? "w-full justify-center md:max-w-[480px]"
            : "",
          className,
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col",
            layout === "hero" ? "md:flex-1" : "",
          )}
        >
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={scheduleLookup}
            disabled={isSubmitting}
            className={cn(
              "font-body w-full rounded-[10px] border border-white/[0.12] bg-bg3 px-[18px] py-3.5 text-[0.95rem] text-[#f0f2f5] placeholder:text-muted outline-none transition-colors focus:border-accent disabled:opacity-60",
              layout === "final" && "max-w-none",
              showInvalid && "border-danger",
            )}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-head shrink-0 rounded-[10px] bg-accent px-6 py-3.5 text-[0.9rem] font-bold text-bg transition hover:bg-[#00ffb2] hover:translate-y-[-1px] active:translate-y-0 whitespace-nowrap disabled:pointer-events-none disabled:opacity-60"
        >
          {isSubmitting ? "…" : submitLabel}
        </button>
      </form>
      {submitError ? (
        <p
          className={cn(
            "mt-2 font-body text-[0.85rem] text-danger",
            layout === "hero" && "text-center md:text-left",
            layout !== "hero" && "text-center",
          )}
          role="alert"
        >
          {submitError}
        </p>
      ) : null}
    </div>
  );
}
