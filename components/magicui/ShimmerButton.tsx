import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export function ShimmerButton({
  shimmerColor = "#B5834A",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "0px",
  background = "hsl(var(--foreground))",
  className,
  children,
  asChild = false,
  ...props
}: ShimmerButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3",
        "text-background text-xs uppercase tracking-widest font-medium",
        "[background:var(--bg)]",
        "transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {/* Shimmer overlay */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden",
          "[border-radius:var(--radius)]"
        )}
      >
        <div
          className="absolute inset-[-100%] rotate-[-60deg] animate-shimmer"
          style={{
            background: `conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))`,
            opacity: 0.15,
          }}
        />
      </div>

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}
