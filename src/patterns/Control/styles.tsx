import styled from "styled-components";
import { SIZES } from "./constants";
import { ContainerProps } from "./types";

const Container = styled.div`
  position: relative;
  display: inline-block;
  color: #5d6369;
  margin: 10px;
  min-width: ${(props: ContainerProps) =>
    props.size === SIZES.LARGE ? 200 : 150}px;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #5a6066;
`;

export { Container, Label };
