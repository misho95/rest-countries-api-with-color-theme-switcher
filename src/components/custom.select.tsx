import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useClickAway } from "@uidotdev/usehooks";

interface PropsType {
  width: number;
  height: number;
  value: string;
  list: string[];
  onChange: (arg: string) => void;
}

const CustomSelect = ({ width, height, value, list, onChange }: PropsType) => {
  const [open, setOpen] = useState(false);
  const defVal = useRef<string>(value);
  const [active, setActive] = useState(defVal.current);
  const ref: any = useClickAway(() => {
    setOpen(false);
  });

  const handleSelect = (event: string) => {
    setActive(event);
    onChange(event);
    setOpen(false);
  };

  useEffect(() => {
    if (value === defVal.current) {
      setActive(defVal.current);
      onChange(defVal.current);
    }
  }, [value]);

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
          {active !== defVal.current && (
            <span
              onClick={() => {
                setActive(defVal.current),
                  onChange(defVal.current),
                  setOpen(false);
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
                  onClick={() => handleSelect(list[i])}
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
