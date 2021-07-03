import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <LoginBox>
            Login
        </LoginBox>
    )
}

const LoginBox = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`