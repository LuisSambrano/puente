"use client";

export function MotionBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 - Slow (background) */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(46,204,113,0.15) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          animation: "gradient 60s linear infinite",
        }}
      />
      {/* Layer 2 - Medium */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 80%, rgba(46,204,113,0.2) 0%, transparent 60%)",
          backgroundSize: "250% 250%",
          animation: "gradient 40s linear infinite reverse",
        }}
      />
      {/* Layer 3 - Fast (foreground) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(46,204,113,0.12) 0%, transparent 70%)",
          backgroundSize: "180% 180%",
          animation: "gradient 30s linear infinite",
        }}
      />
    </div>
  );
}
