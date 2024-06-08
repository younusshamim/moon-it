import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Input as RizzInput } from "rizzui";

type RizzInputProps = ComponentProps<typeof RizzInput>

type PropsTypes = {
  inputClassName: string;
} & RizzInputProps

const Input = ({ inputClassName, ...props }: PropsTypes) => {
  return <RizzInput inputClassName={cn("px-3", inputClassName)} {...props} />;
};

export default Input;
