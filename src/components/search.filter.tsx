import { MdSearch } from "react-icons/md";
import CustomSelect from "./custom.select";
import { useEffect, useState } from "react";
import { flags } from "../zustand";

const SearchFilter = () => {
  const optionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const defaultSelect = "Filter by Region";

  const [selected, setSelected] = useState(defaultSelect);
  const [input, setInput] = useState("");

  const flagsDefault = flags((state) => state.flagsDefault);
  // const flagsData = flags((state) => state.flagsRender);
  const flagsFilter = flags((state) => state.filterFlags);
  const flagsReset = flags((state) => state.resetFlags);

  const filterBySearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === "") {
      flagsReset();
      return;
    }

    const filterd = flagsDefault.filter((d: any) => {
      if (d.name.toLowerCase().includes(input.toLowerCase())) {
        return d;
      }
    });

    flagsFilter(filterd);
  };

  useEffect(() => {
    if (selected === defaultSelect) {
      console.log("tesing....");
      flagsReset();
      return;
    }

    const filterd = flagsDefault.filter((d: any) => {
      if (d.region.toLowerCase() === selected.toLowerCase()) {
        return d;
      }
    });

    flagsFilter(filterd);
  }, [selected]);

  return (
    <section className="my-[45px] w-full flex flex-col sm:flex-row gap-[40px] justify-between">
      <form
        onSubmit={filterBySearch}
        className="w-full sm:w-[400px] lg:w-[480px] h-[56px]  bg-white dark:bg-[#2B3844] text-black dark:text-white shadow-sm shadow-black/10 relative pl-[55px]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for a country…"
          className="w-full h-full p-[10px] focus:outline-none bg-transparent"
        />
        <button
          className={
            "w-[18px] h-[18px] absolute left-[30px] top-1/2 -translate-y-1/2 text-[#848484] dark:text-white"
          }
        >
          <MdSearch className={"w-full h-full"} />
        </button>
      </form>
      <CustomSelect
        width={200}
        height={56}
        value={selected}
        onChange={setSelected}
        list={optionList}
      />
    </section>
  );
};

export default SearchFilter;
