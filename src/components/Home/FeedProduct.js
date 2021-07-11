import styled from 'styled-components'
import colors from '../Colors';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export default function FeedProduct(props) {
    return(
        <FeedProductBox>

            <Link to="/" style={{textDecoration: 'none'}}>
                <Image src={props.image}/>
            </Link>
            <Title>
                {props.title}
            </Title>
            <Price>
                R$ {props.price.toFixed(2)}
            </Price>
            <Bottom>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <SeeProduct>
                            quero conhecer
                    </SeeProduct>  
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <AddToCart>
                        + 
                        <AiOutlineShoppingCart size={20}/>
                    </AddToCart>
                </Link>
            </Bottom>
        </FeedProductBox>
    )
}

const FeedProductBox = styled.div`
    display: flex;
    width: 240px;
    height: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Image = styled.img`
    width: 240px;
    height: 240px;
    object-fit: contain;
`
const Title = styled.div`
    font-weight: 700;
    color: ${colors.mainBlack};
    font-size: 16px;
`

const Price = styled.div`
    font-weight: 700;
    color: ${colors.mainBlack};
    font-size: 20px;
    width: 100%;
    padding-left: 20px;
    text-align: left;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 240px;
`

const SeeProduct = styled.div`
    background-color: ${colors.mainBlack};
    color: white;
    text-align: center;
    font-weight: 700;
    line-height: 40px;
    width: 170px;
    border-radius: 3px;
    user-select: none;
`

const AddToCart = styled.div`
    border: 2px solid ${colors.mainBlack};
    background-color: white;
    color: ${colors.mainBlack};
    width: 50px;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    font-size: 25px;
    user-select: none;
`

