interface AdSlotProps {
  slot: "header" | "sidebar" | "in-content" | "footer";
  className?: string;
}

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  // Placeholder for future Google AdSense integration
  // Different ad sizes for different slots
  const adDimensions = {
    header: "728x90", // Leaderboard
    sidebar: "300x250", // Medium Rectangle
    "in-content": "336x280", // Large Rectangle
    footer: "728x90", // Leaderboard
  };

  const dimensions = {
    header: "h-[90px] w-full max-w-[728px]",
    sidebar: "h-[250px] w-[300px]",
    "in-content": "h-[280px] w-[336px]",
    footer: "h-[90px] w-full max-w-[728px]",
  };

  return (
    <div className={`${className}`}>
      <div
        className={`bg-stone-100/50 border border-stone-300/60 rounded-xl flex items-center justify-center ${dimensions[slot]} mx-auto`}
      >
        <div className="text-center text-stone-400 text-sm">
          <div className="font-medium">Ad Space</div>
          <div className="text-xs mt-1">{adDimensions[slot]}</div>
        </div>
      </div>
    </div>
  );
}
