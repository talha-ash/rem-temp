import { useState, useEffect } from "react";
import { type Skip } from "../types";

const skipUrl =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export const useSkipData = () => {
  const [state, setState] = useState({
    skips: [] as Skip[],
    loading: true,
  });

  const getSkips = async () => {
    setState({ ...state, loading: true });
    const rawSkips = await fetch(skipUrl);
    const skips = (await rawSkips.json()) as Skip[];
    setState({ ...state, skips: skips, loading: false });
  };

  useEffect(() => {
    getSkips();
  }, []);

  return state;
};
