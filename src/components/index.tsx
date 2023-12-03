import data from "../data.json";
import Card from "./card";

const Index = () => {
  return (
    <div className="flex flex-wrap gap-[74px]">
      {data.map((d) => {
        return (
          <Card
            img={d.flag}
            name={d.name}
            population={d.population}
            region={d.region}
            capital={d.capital}
          />
        );
      })}
    </div>
  );
};

export default Index;
