import { AlertTriangle } from "lucide-react";
import { cn } from "../../utils";
import { ThemeConfig } from "../../theme";

type SkipImageProps = {
  size: number;
  privateOnly: boolean;
  imageUrl?: string;
};

export function SkipImage({ size, privateOnly, imageUrl }: SkipImageProps) {
  return (
    <div className="relative h-64">
      <img
        src={"/trash.jpg"}
        alt={`${size} Yard Skip`}
        width={600}
        height={400}
        className="object-cover w-full h-full"
      />

      {privateOnly && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center text-sm font-medium",
            ThemeConfig.primary,
            ThemeConfig.primaryText
          )}
        >
          <AlertTriangle className="w-4 h-4 mr-2" />
          Private Property Only
        </div>
      )}
    </div>
  );
}
