import React from "react";

import Props from "./types";
import * as SC from "./styles";

const List: React.FC<Props> = ({ loading, children }) => (
  <SC.List>
    <SC.InfoText>
      {loading
        ? "...Loading"
        : `Showing ${
            children instanceof Array ? children.length : 1
          } Customers`}
    </SC.InfoText>
    {children}
  </SC.List>
);

export default List;
