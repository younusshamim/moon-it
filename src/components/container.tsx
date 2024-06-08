import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: PropsTypes) => {
  return (
    <div className={cn("w-[1280px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
