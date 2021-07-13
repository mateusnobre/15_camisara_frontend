import styled from 'styled-components'
import colors from '../Colors'
export default function OrderedProduct(props){
    return(
        <OrderedProductBox>
            <Title>{props.title} {props.size}</Title>
            <Price>{props.price}</Price>
            <Quantity>{props.quantity}</Quantity>
        </OrderedProductBox>
    )
}

const OrderedProductBox = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
`
const Title = styled.div`
    width: 250px;
    font-weight: 700;
    font-size: 22px;
    color: ${colors.purple};
`
const Price = styled.div`
    width: 50px;
    font-weight: 700;
    color: ${colors.purple};
`
const Quantity = styled.div`
    width: 30px;
    font-weight: 400;
    color: ${colors.purple};
`