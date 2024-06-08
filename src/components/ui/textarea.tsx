import { ComponentProps } from "react";
import { Textarea as RizzTextarea } from "rizzui";

type RizzTextareaProps = ComponentProps<typeof RizzTextarea>

type PropsTypes = {
} & RizzTextareaProps

const Textarea = ({ ...props }: PropsTypes) => {
  return <RizzTextarea {...props} />;
};

export default Textarea;
