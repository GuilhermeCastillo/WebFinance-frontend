import React from "react";
import * as C from "./styles";

const Error = () => {
  return (
    <C.Container>
      <C.ContainerTitle>404</C.ContainerTitle>

      <h2>Pagina nao encontrada</h2>

      <C.ContainerLink to="/">Ir para home!</C.ContainerLink>
    </C.Container>
  );
};

export default Error;
