// src/components/ui/loader.tsx
import { cn } from "@/lib/utils";

export function Loader({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      {/* Glowing Container */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Outer Ring (Clockwise) */}
        <div className="absolute h-full w-full animate-[spin_2s_linear_infinite] rounded-full border-[3px] border-muted border-t-primary border-b-primary shadow-2xl shadow-primary/20" />
        
        {/* Inner Ring (Anti-Clockwise) */}
        <div className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-[3px] border-muted/30 border-l-primary border-r-primary" />
        
        {/* Center SA Text with Gradient */}
        <span className="relative z-10 bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-3xl font-black tracking-tight text-transparent">
          SA
        </span>
      </div>

      {/* Name aur Progress Bar */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
          Safiullah Arain
        </p>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full animate-[loaderSlide_1.8s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary/60 to-primary" />
        </div>
      </div>
    </div>
  );
}