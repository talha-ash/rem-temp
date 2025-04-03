import { cn } from "../../utils";
import { ThemeConfig } from "../../theme";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type PageHeaderProps = {
  title: string;
  yard: number | null;
  description?: string;
};

export function PageHeader({ title, description, yard }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex justify-start flex-col gap-6 bg-white p-6 border-l-4 shadow-sm mb-8 sticky top-0 z-100",
        ThemeConfig.accent
      )}
    >
      <div className="flex md:justify-between justify-start flex-col md:flex-row">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
        <div className="flex items-center  space-x-4 md:h-3/4">
          <Button variant="outline">Back</Button>
          <Button
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" />}
            disabled={false}
          >
            Continue
          </Button>
        </div>
      </div>
      {yard ? (
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Yard:</span> {yard} & 7 day hire
        </div>
      ) : null}
    </div>
  );
}
