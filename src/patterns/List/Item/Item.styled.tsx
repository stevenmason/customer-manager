import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
  background-color: #f1f1f1;

  &:not(:last-child) {
    border-bottom: 1px solid #d7dbdf;
  }
`;

export default StyledItem;
