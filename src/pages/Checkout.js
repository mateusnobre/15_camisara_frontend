import styled from 'styled-components'
import Topbar from '../components/Topbar';
export default function Checkout() {
    return(
        <CheckoutBox>
            <Topbar title="carrinho"/>
        </CheckoutBox>
    )
}

const CheckoutBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`
