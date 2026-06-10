import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#B5834A",
  shimmerDuration = "3s",
  background = "hsl(var(--foreground))",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--speed": shimmerDuration,
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
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-[-100%] rotate-[-60deg] animate-shimmer"
          style={{
            background: "conic-gradient(from 225deg, transparent 0, #B5834A 45deg, transparent 45deg)",
            opacity: 0.15,
          }}
        />
      </div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
