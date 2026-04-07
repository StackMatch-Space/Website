import { cn } from "@/lib/utils";

export interface ScoreRingProps {
  score: number;
  size?: "sm" | "md";
}

export function ScoreRing({ score, size = "sm" }: ScoreRingProps) {
  const tier =
    score >= 85
      ? {
          border: "border-2 border-accent",
          bg: "bg-accent/10",
          text: "text-accent",
        }
      : score >= 70
        ? {
            border: "border-2 border-scoreMid",
            bg: "bg-scoreMid/10",
            text: "text-scoreMid",
          }
        : {
            border: "border-2 border-danger",
            bg: "bg-danger/10",
            text: "text-danger",
          };

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-head font-extrabold tabular-nums",
        tier.border,
        tier.bg,
        tier.text,
        size === "sm" ? "h-10 w-10 text-[0.8rem]" : "h-12 w-12 text-sm",
      )}
      aria-label={`Match score ${score} percent`}
    >
      {score}
    </div>
  );
}
