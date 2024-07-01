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
    <div className="flex gap-8 border-b-2 border-b-border mb-7">
      {categories.map((tab, index) => {
        return (
          <p
            key={tab.name + index}
            className={cn(
              "text-foreground font-semibold cursor-pointer pb-2 px-2",
              {
                "text-primary font-bold border-b-2 border-primary":
                  selectedCategory === tab.name,
              }
            )}
            onClick={() => setSelectedCategory(tab.name)}
          >
            {tab.label}
          </p>
        );
      })}
    </div>
  );
};

export default Categories;
