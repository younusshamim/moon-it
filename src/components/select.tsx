import * as React from "react"
import { Select as ShadcnSelect, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { cn } from "@/lib/utils";
import { OptionType } from "@/lib/types/option-type";

type SelectProps = React.ComponentProps<typeof ShadcnSelect>;
interface PropsTypes extends React.SelectHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    options: OptionType[];
    className?: string;
    inputClassName?: string;
    error?: string;
}

const Select = ({ label, placeholder = "", options, className, inputClassName, error, ...props }: PropsTypes & SelectProps) => {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <label className="text-sm">{label}</label>

            <ShadcnSelect {...props}>
                <SelectTrigger className={cn('dark:bg-card border-border px-2 xl:p-3', inputClassName, { 'border-2 border-red-500': error })}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent className="border-border dark:bg-gray-800 dark:text-white">
                    <SelectGroup>
                        {options.map((item, index) => (
                            <SelectItem value={item.value} key={index}>
                                {item.label}
                            </SelectItem>
                        ))}

                    </SelectGroup>
                </SelectContent>
            </ShadcnSelect>

            {error && (
                <p className="text-[13px] ml-1 text-red-500">{error}</p>
            )}
        </div>
    )
}

export default Select