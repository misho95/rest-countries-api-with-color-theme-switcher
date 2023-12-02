import { useWindowSize } from "@uidotdev/usehooks";
import { ReactNode, useEffect, useState } from "react";

interface PropsType {
  children: ReactNode;
}

const Container = ({ children }: PropsType) => {
  const windowSize = useWindowSize();
  const [height, setHeight] = useState(
    windowSize.height ? windowSize.height : 0
  );

  useEffect(() => {
    if (!windowSize.height) {
      return;
    }
    setHeight(windowSize.height - 80);
  }, [windowSize]);

  return (
    <div
      className={`w-full bg-neutral-100 dark:bg-[#202C36] flex justify-center`}
      style={{ minHeight: height }}
    >
      <div className="w-customWidth flex flex-col">{children}</div>
    </div>
  );
};

export default Container;
