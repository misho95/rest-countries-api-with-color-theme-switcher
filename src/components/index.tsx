import { useWindowSize } from "@uidotdev/usehooks";
import Card from "./card";
import { useEffect, useState } from "react";
import { flags } from "../zustand";

const Index = () => {
  const windowSize = useWindowSize();
  const [width, setWidth] = useState<number>(0);
  const flagsData = flags((state) => state.flagsRender);

  const calculateWidth = () => {
    if (!windowSize.width) {
      return;
    }

    const card = windowSize.width / (264 + 74);
    const round = Math.floor(card);
    const final = round * 264 + 47 * (round - 1);
    setWidth(final);
  };

  useEffect(() => {
    calculateWidth();
  }, [windowSize]);

  return (
    <section className="flex justify-center mb-[30px]">
      <div className="flex flex-wrap gap-[47px]" style={{ width: width }}>
        {flagsData.map((d: any) => {
          return (
            <Card
              key={d.name}
              img={d.flag}
              name={d.name}
              population={d.population}
              region={d.region}
              capital={d.capital}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Index;
