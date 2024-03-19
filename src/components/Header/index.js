import * as C from "./styles";

const Header = () => {
  return (
    <C.Header>
      <C.Box>
        <C.ContainerLink to="/">Home</C.ContainerLink>
        <C.ContainerLink to="/dashboard">Dashboard</C.ContainerLink>
      </C.Box>

      <C.Box>
        <h1>Abril</h1>
      </C.Box>
    </C.Header>
  );
};

export default Header;
