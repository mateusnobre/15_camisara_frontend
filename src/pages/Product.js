import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";

export default function Product() {
  return (
    <Container>
      <Topbar></Topbar>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
`;
