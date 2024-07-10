import { OptionType } from "@/lib/types/option-type";
import { cn } from "@/lib/utils";

type PropsType = {
    tabOptions: OptionType[];
    selected: string | number;
    setSelected: (item: string | number) => void;
};

const Tabs = ({ tabOptions, selected, setSelected }: PropsType) => {
    return (
        <div className="flex gap-5 xl:gap-8 border-b-2 border-b-border mb-7 overflow-x-auto">
            {tabOptions.map((tab, index) => {
                return (
                    <p
                        key={index}
                        className={cn(
                            "text-foreground font-semibold cursor-pointer pb-2 px-2 min-w-fit",
                            {
                                "text-primary font-bold border-b-2 border-primary":
                                    selected === tab.value,
                            }
                        )}
                        onClick={() => setSelected(tab.value)}
                    >
                        {tab.label}
                    </p>
                );
            })}
        </div>
    );
};

export default Tabs;