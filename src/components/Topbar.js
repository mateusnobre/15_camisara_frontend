import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "./Colors";
import logo from "../assets/images/logo.png";
import { Input } from "./common/Components";
import { PersonOutline, CartOutline } from "react-ionicons";

export default function Topbar() {
  return (
    <TopbarBox>
      <Container>
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <Input placeholder="pesquisar"></Input>
        <div>
          <PersonOutline cssClasses="icon"></PersonOutline>
          <CartOutline cssClasses="icon"></CartOutline>
        </div>
      </Container>
      <Header>
        loja
      </Header>
    </TopbarBox>
  );
}

const TopbarBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: white; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 1;
  img {
    height: 70px;
    width: auto;
    margin-top: 10px;
  }
  .icon {
    margin-right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

const Header = styled.div`
  margin-top: 80px;
  height : 80px;
  line-height : 80px;
  color: white;
  font-weight: 700;
  width: 100vw;
  font-size: 50px;
  text-align: center;
  background-color: ${colors.greenLight};
  user-select : none;
`
