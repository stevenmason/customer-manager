import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 1300;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid #ced4da;
  color: #5a6066;
  border-radius: 0.25rem;
  font-size: 1em;
  max-height: calc(100% - 96px);
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { Container, Backdrop, Modal };
