import { cn } from "../..//utils";
import { ThemeConfig } from "../../theme";
import { SkipHeader } from "./SkipHeader";
import { SkipImage } from "./SkipImage";
import { SkipContent } from "./SkipContent";
import { Skip } from "../../types";

type SkipCardProps = {
  skip: Skip;
  selected: boolean;
  onSelect: (id: Skip) => void;
};

export function SkipCard({ skip, selected, onSelect }: SkipCardProps) {
  return (
    <div
      className={cn(
        "bg-white border h-[450px]",
        selected
          ? `${ThemeConfig.accent} border-2 shadow-md`
          : "border-gray-200 hover:border-gray-300 hover:shadow"
      )}
    >
      <SkipHeader size={skip.size} selected={selected} />
      <SkipImage size={skip.size} privateOnly={skip.forbidden} />
      <SkipContent
        price={skip.price_before_vat}
        hirePeriodDays={skip.hire_period_days}
        selected={selected}
        onSelect={() => onSelect(skip)}
      />
    </div>
  );
}
