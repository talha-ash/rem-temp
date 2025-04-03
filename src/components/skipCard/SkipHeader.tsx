import { Check } from "lucide-react";
import { cn } from "../../utils";
import { ThemeConfig } from "../../theme";

interface SkipHeaderProps {
  size: number;
  selected: boolean;
}

export function SkipHeader({ size, selected }: SkipHeaderProps) {
  return (
    <div
      className={cn(
        "py-3 px-4 border-b font-bold flex justify-between items-center",
        selected
          ? `${ThemeConfig.primary} ${ThemeConfig.primaryText}`
          : `${ThemeConfig.secondary} ${ThemeConfig.secondaryText}`
      )}
    >
      <span>{size} Yard Skip</span>
      {selected && <Check className="w-5 h-5" />}
    </div>
  );
}
