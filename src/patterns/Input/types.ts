import { CONTROL_SIZES } from "../Control";

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  controlSize?: CONTROL_SIZES;
  onChange: (value: string, name: string) => void;
}
