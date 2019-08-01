import { SIZES } from "./constants";

export interface Props extends ContainerProps {
  label?: string;
  children: React.ReactNode;
}

export interface ContainerProps {
  size?: SIZES;
}
