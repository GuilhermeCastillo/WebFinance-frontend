import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-beetween;
  width: 100%;
  height: 60px;
  background-color: #007cb9;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 60px;
  gap: 5px;
`

export const ContainerLink = styled(Link)`
  text-decoration: none;
  background-color: #eeeeee;
  color: #060608;
  padding: 10px;
  border-radius: 2px
`;


