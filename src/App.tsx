import "./styles.css";
import { useState } from "react";
import { PageHeader } from "./components/layout/PageHeader";
import { SkipCard } from "./components/skipCard/SkipCard";
import { ThemeConfig } from "./theme";
import { useSkipData } from "./hooks/useSkipData";
import { SkipCardSkeleton } from "./components/skipCard/SkipCardSkeleton";
import { type Skip } from "./types";

export default function App() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const { skips, loading } = useSkipData();

  return (
    <div className={`min-h-screen ${ThemeConfig.background} text-gray-800`}>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Choose Your Skip Size"
          description="Select the skip size that best suits your needs. All skips include 14-day standard hire period."
          yard={selectedSkip?.size ?? null}
        />
        {loading ? <SkipCardSkeleton /> : null}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
