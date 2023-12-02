import { MdSearch } from "react-icons/md";
import CustomSelect from "./custom.select";
import { useState } from "react";

const SearchFilter = () => {
  const optionList = ["Africa", "America", "Asia", "Europa", "Oceania"];

  const [selected, setSelected] = useState("");

  return (
    <section className="my-[45px] w-full flex flex-col sm:flex-row gap-[40px] justify-between">
      <form className="w-full sm:w-[400px] lg:w-[480px] h-[56px]  bg-white dark:bg-[#2B3844] text-black dark:text-white shadow-sm shadow-black/10 relative pl-[55px]">
        <input
          type="search"
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
        defaultVal={"Filter by Region"}
        list={optionList}
        onChange={setSelected}
      />
    </section>
  );
};

export default SearchFilter;
