"use client"

import { OptionType } from "@/types/option-type";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Controller } from "react-hook-form";
import Select from "./select";

type PropsTypes = {
    control: any;
    name: string;
    label: string;
    placeholder: string;
    options: OptionType[];
    className?: string;
    inputClassName?: string;
    error?: string;
    defaultValue?: string;
    isSetParams?: boolean;
}

const ControlledSelect = ({ control, name, options, label, placeholder, error, defaultValue, isSetParams, ...props }: PropsTypes) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleValueChange = (selected: any, onChange: (value: string) => void) => {
        onChange(!isNaN(Number(selected)) ? Number(selected) : selected)

        if (isSetParams) {
            const params = new URLSearchParams(searchParams);
            params.set(name, selected);
            replace(`${pathname}?${params.toString()}`);
        }
    }

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => {
                return (
                    <Select
                        value={options.find(option => option.value == value)?.value}
                        onValueChange={(selected) => handleValueChange(selected, onChange)}
                        label={label}
                        options={options}
                        placeholder={placeholder}
                        error={error}
                        defaultValue={defaultValue}
                        {...props}
                    />
                )
            }}
        />
    );
};

export default ControlledSelect;