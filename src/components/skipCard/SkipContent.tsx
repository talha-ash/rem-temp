import { cn } from "../../utils";
import { ThemeConfig } from "../../theme";

type SkipContentProps = {
  price: number;
  selected: boolean;
  hirePeriodDays: number;
  onSelect: () => void;
};

export function SkipContent({
  price,
  selected,
  onSelect,
  hirePeriodDays,
}: SkipContentProps) {
  return (
    <div className="p-5 border-t border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500">
            Standard {hirePeriodDays} day hire
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-gray-900">£{price}</p>
          <p className="text-gray-500 text-xs">per week</p>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <button
          onClick={onSelect}
          className={cn(
            "w-full py-3 font-medium text-center transition-colors",
            selected
              ? `${ThemeConfig.primary} ${ThemeConfig.primaryText} ${ThemeConfig.primaryHover}`
              : `${ThemeConfig.secondary} ${ThemeConfig.secondaryText} ${ThemeConfig.secondaryHover}`
          )}
        >
          {selected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
}
