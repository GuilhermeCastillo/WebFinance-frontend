import React from "react";
import * as C from "./styles";

const ResumeItem = ({ color, title, Icon, value }) => {
  return (
    <C.Container color={color}>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;