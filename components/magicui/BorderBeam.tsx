import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  anchor?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#B5834A",
  colorTo = "transparent",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "[background:linear-gradient(white,white)_padding-box,linear-gradient(calc(var(--angle)+90deg),var(--color-from),var(--color-to),var(--color-from))_border-box]",
        "dark:[background:linear-gradient(hsl(var(--card)),hsl(var(--card)))_padding-box,linear-gradient(calc(var(--angle)+90deg),var(--color-from),var(--color-to),var(--color-from))_border-box]",
        "[animation:border-beam_calc(var(--duration)*1s)_infinite_linear]",
        "[animation-delay:var(--delay)]",
        className
      )}
    />
  );
}
