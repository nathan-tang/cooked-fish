interface WaveDividerProps {
  color?: string;
  flip?: boolean;
}

export function WaveDivider({
  color = "#fafaf9",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,0 C150,80 350,0 500,40 C650,80 750,20 900,50 C1050,80 1150,20 1200,40 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
