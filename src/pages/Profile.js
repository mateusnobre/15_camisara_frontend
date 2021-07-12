import styled from "styled-components";
import colors from "../components/Colors";
import NoUser from "../components/profile/NoUser";
import UserInfo from "../components/profile/UserInfo";
import Topbar from "../components/Topbar";

export default function Profile() {
  const user = localStorage.getItem("user");
  return (
    <Container>
      <Topbar title="loja"/>
      {user ? <UserInfo /> : <NoUser />}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: ${colors.background};
`;
