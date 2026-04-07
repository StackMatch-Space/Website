"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { isValidEmail, normalizeEmail } from "@/lib/email";

const STORAGE_EMAIL = "stackmatch_waitlist_email";
const STORAGE_STATE = "stackmatch_waitlist_state";

type ResolvedState = "subscribed" | "already_registered";

type WaitlistContextValue = {
  email: string;
  setEmail: (value: string) => void;
  isResolvedForCurrentEmail: boolean;
  resolvedState: ResolvedState | null;
  isSubmitting: boolean;
  submitError: string | null;
  showInvalid: boolean;
  setShowInvalid: (value: boolean) => void;
  submitWaitlist: () => Promise<void>;
  checkRegistered: (emailToCheck: string) => Promise<void>;
  configError: boolean;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

function readSession(): { email: string; state: ResolvedState | null } {
  if (typeof window === "undefined") {
    return { email: "", state: null };
  }
  try {
    const email = sessionStorage.getItem(STORAGE_EMAIL) ?? "";
    const raw = sessionStorage.getItem(STORAGE_STATE);
    const state =
      raw === "subscribed" || raw === "already_registered" ? raw : null;
    return { email, state };
  } catch {
    return { email: "", state: null };
  }
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [email, setEmailState] = useState("");
  const [resolved, setResolved] = useState<{
    email: string;
    state: ResolvedState;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showInvalid, setShowInvalid] = useState(false);
  const [configError, setConfigError] = useState(false);

  useEffect(() => {
    const { email: storedEmail, state } = readSession();
    setEmailState(storedEmail);
    if (storedEmail && state && isValidEmail(storedEmail)) {
      const norm = normalizeEmail(storedEmail);
      setResolved({ email: norm, state });
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (email) sessionStorage.setItem(STORAGE_EMAIL, email);
      else sessionStorage.removeItem(STORAGE_EMAIL);
    } catch {
      /* ignore */
    }
  }, [email, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (resolved) {
        sessionStorage.setItem(STORAGE_EMAIL, resolved.email);
        sessionStorage.setItem(STORAGE_STATE, resolved.state);
      } else {
        sessionStorage.removeItem(STORAGE_STATE);
      }
    } catch {
      /* ignore */
    }
  }, [hydrated, resolved]);

  const setEmail = useCallback((value: string) => {
    setEmailState(value);
    setShowInvalid(false);
    setSubmitError(null);
    setConfigError(false);
    const norm = normalizeEmail(value);
    setResolved((prev) => {
      if (!prev) return null;
      if (norm !== prev.email) return null;
      return prev;
    });
  }, []);

  const normalizedInput = normalizeEmail(email);
  const isResolvedForCurrentEmail =
    resolved !== null && normalizedInput === resolved.email;

  const submitWaitlist = useCallback(async () => {
    setSubmitError(null);
    setConfigError(false);
    if (!isValidEmail(email)) {
      setShowInvalid(true);
      return;
    }
    setShowInvalid(false);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedInput }),
      });
      const data: unknown = await res.json().catch(() => ({}));
      if (res.status === 503) {
        setConfigError(true);
        setSubmitError(
          typeof data === "object" &&
            data !== null &&
            "error" in data &&
            typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Waitlist is not available yet.",
        );
        return;
      }
      if (!res.ok) {
        setSubmitError(
          typeof data === "object" &&
            data !== null &&
            "error" in data &&
            typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Something went wrong. Try again.",
        );
        return;
      }
      if (
        typeof data === "object" &&
        data !== null &&
        "ok" in data &&
        (data as { ok?: unknown }).ok === true &&
        "state" in data
      ) {
        const state = (data as { state: string }).state;
        if (state === "subscribed" || state === "already_registered") {
          setResolved({ email: normalizedInput, state });
          setEmailState(normalizedInput);
          return;
        }
      }
      setSubmitError("Unexpected response. Try again.");
    } catch {
      setSubmitError("Network error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [email, normalizedInput]);

  const checkRegistered = useCallback(async (emailToCheck: string) => {
    const norm = normalizeEmail(emailToCheck);
    if (!isValidEmail(norm)) return;
    setSubmitError(null);
    setConfigError(false);
    try {
      const res = await fetch(
        `/api/waitlist?email=${encodeURIComponent(norm)}`,
        { method: "GET" },
      );
      const data: unknown = await res.json().catch(() => ({}));
      if (res.status === 503) {
        setConfigError(true);
        return;
      }
      if (!res.ok) return;
      if (
        typeof data === "object" &&
        data !== null &&
        "registered" in data &&
        (data as { registered: unknown }).registered === true
      ) {
        setResolved({ email: norm, state: "already_registered" });
        setEmailState(norm);
      }
    } catch {
      /* ignore lookup failures on blur */
    }
  }, []);

  const value = useMemo<WaitlistContextValue>(
    () => ({
      email,
      setEmail,
      isResolvedForCurrentEmail,
      resolvedState: isResolvedForCurrentEmail ? resolved?.state ?? null : null,
      isSubmitting,
      submitError,
      showInvalid,
      setShowInvalid,
      submitWaitlist,
      checkRegistered,
      configError,
    }),
    [
      email,
      setEmail,
      isResolvedForCurrentEmail,
      resolved,
      isSubmitting,
      submitError,
      showInvalid,
      submitWaitlist,
      checkRegistered,
      configError,
    ],
  );

  return (
    <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>
  );
}

export function useWaitlist(): WaitlistContextValue {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return ctx;
}
