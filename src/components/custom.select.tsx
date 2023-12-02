import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useClickAway } from "@uidotdev/usehooks";

interface PropsType {
  width: number;
  height: number;
  defaultVal: string;
  list: string[];
  onChange: (arg: string) => void;
}

const CustomSelect = ({
  width,
  height,
  defaultVal,
  list,
  onChange,
}: PropsType) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(defaultVal);
  const ref: any = useClickAway(() => {
    setOpen(false);
  });

  useEffect(() => {
    if (active === defaultVal) {
      onChange("");
      return;
    }

    onChange(active);
  }, [active]);

  return (
    <div
      ref={ref}
      role="custom-select"
      style={{ width: width, height: height }}
      className="bg-white dark:bg-[#2B3844] text-black dark:text-white rounded-lg shadow-sm shadow-black/10 flex items-center relative"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-[20px] h-full"
      >
        <span>{active}</span>
        <FaAngleDown />
      </button>
      {open && (
        <dialog className="flex flex-col gap-[18px]  absolute top-[60px] left-0 w-full bg-white dark:bg-[#2B3844] text-black dark:text-white rounded-lg shadow-sm shadow-black/10 overflow-hidden z-50">
          {active !== defaultVal && (
            <span
              onClick={() => {
                setActive(defaultVal), setOpen(false);
              }}
              className="cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 px-[20px] py-[10px]"
            >
              Deselect All
            </span>
          )}
          {list.map((v: string, i: number) => {
            if (active !== list[i]) {
              return (
                <span
                  key={i}
                  onClick={() => {
                    setActive(list[i]), setOpen(false);
                  }}
                  className="cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 px-[20px] py-[10px]"
                >
                  {v}
                </span>
              );
            }
          })}
        </dialog>
      )}
    </div>
  );
};

export default CustomSelect;
