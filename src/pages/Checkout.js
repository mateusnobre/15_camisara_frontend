import styled from 'styled-components'
import Topbar from '../components/Topbar';
import OrderedProduct from '../components/checkout/OrderedProduct';
import OrderContext from '../OrderContext'
import { useContext } from 'react';
import { useHistory } from 'react-router';
import colors from '../components/Colors'
import axios from 'axios'
import baseUrl from '../components/BaseURL';

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

export default function Checkout() {
    const { order,  setOrder} = useContext(OrderContext);
    const user = localStorage.getItem("user");
    const history = useHistory()
    function getSum(total, num) {
      return total + num;
    }
    function sendOrder(){
        if (order.length === 0){
            alert("Adicione algo no carrinho")
        }
        else{
            for (let i=0; i < order.length; i++){
                const body = {quantity: order[i].quantity}
                axios
                  .post(baseUrl+`/purchase/${order[i].id}`, body, config)
                  .then(() => {
                    });
            }
            setOrder([])
            history.push('/')
        }

    }
    return(
        <CheckoutBox>
            <Topbar title="carrinho"/>
            <TableHeader>
                <h2>produto</h2>
                <h2>preço</h2>
                <h2>qtde.</h2>
            </TableHeader>
            {order.map((p) => (
                <OrderedProduct id={p.id} size={p.size} title={p.title} price={p.price} quantity={p.quantity}/>
            ))}
            <Total>
                <h1>total</h1>
                R$ {order.map((p) => (p.price * p.quantity)).reduce(getSum, 0).toFixed(2)}
            </Total>
            {user ? 
            <SendOrder onClick={sendOrder}>
                enviar pedido
            </SendOrder>
            : 
            <SendOrder >
                Faça login para fazer um pedido
            </SendOrder>
            }
        </CheckoutBox>
    )
}

const CheckoutBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`

const TableHeader = styled.div`
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: 500px;
    font-size: 18px;
    text-align: center;
    color: ${colors.blackMain};
    h2:first-child {
        margin-right: 180px;
    }
`

const Total = styled.div`
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    width: 500px;
    font-size: 25px;
    text-align: center;
    color: ${colors.orangeLight};
`
const SendOrder = styled.button`
    width: 150px;
    height: 60px;
    font-weight: 700;
    font-size: 16px;
    color: white;
    background-color: ${colors.greenLight};
    border-radius: 10px;
    border: none;
    :hover {
        opacity: 0.8;
    }
`