import { Controller } from "react-hook-form";
import Select from "./select";
import { OptionType } from "@/lib/types/option-type";

type PropsTypes = {
    control: any;
    name: string;
    label: string;
    placeholder: string;
    options: OptionType[];
    className?: string;
    inputClassName?: string;
    error?: string;
}

const ControlledSelect = ({ control, name, options, label, placeholder, error, ...props }: PropsTypes) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => {
                return (
                    <Select
                        value={options.find(option => option.value == value)?.value}
                        onValueChange={(selected) => onChange(parseInt(selected))}
                        label={label}
                        options={options}
                        placeholder={placeholder}
                        error={error}
                        {...props}
                    />
                )
            }}
        />
    );
};

export default ControlledSelect;