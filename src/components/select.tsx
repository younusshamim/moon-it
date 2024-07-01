import * as React from "react"
import { Select as ShadcnSelect, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { cn } from "@/lib/utils";
import { OptionType } from "@/lib/types/option-type";

type PropsTypes = {
    label: string;
    placeholder: string;
    options: OptionType[];
    className?: string;
    inputClassName?: string;
}

const Select = ({ label, placeholder = "", options, className, inputClassName }: PropsTypes) => {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <label className="text-sm">{label}</label>

            <ShadcnSelect>
                <SelectTrigger className={cn('dark:bg-card border-border', inputClassName)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent className="border-border dark:bg-gray-800 dark:text-white">
                    <SelectGroup>
                        {/* <SelectLabel>aa</SelectLabel> */}
                        {options.map((item, index) => (
                            <SelectItem value={item.value} key={item.value + index}>
                                {item.label}
                            </SelectItem>
                        ))}

                    </SelectGroup>
                </SelectContent>
            </ShadcnSelect>
        </div>
    )
}

export default Select