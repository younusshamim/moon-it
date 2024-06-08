import { CategoryType } from "@/lib/types/category";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type PropsTypes = {
  categories: CategoryType[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const Categories = ({ categories, selectedCategory, setSelectedCategory }: PropsTypes) => {
  return (
    <div className="grid grid-cols-4 gap-5 mb-5">
      {categories.map((tab, i) => (
        <p
          className={cn(
            "border border-slate-300 bg-slate-50 py-[7px] rounded-card cursor-pointer text-center",
            {
              "bg-foreground text-background": selectedCategory === tab.name,
            }
          )}
          onClick={() => setSelectedCategory(tab.name)}
          key={tab.name + i}
        >
          {tab.label}
        </p>
      ))}
    </div>
  );
};

export default Categories;
