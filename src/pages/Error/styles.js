import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh -60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerTitle = styled.h1`
  font-size: 120px;
`;

export const ContainerLink = styled(Link)`
  text-decoration: none;
  background-color: #ff9a3c;
  color: #060608;
  padding: 10px;
  margin-top: 14px;
`;
