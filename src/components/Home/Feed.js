import styled from 'styled-components'
import FeedProduct from './FeedProduct'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Feed() {
    const baseUrl = "http://localhost:4000" // "https://camisara-backend.herokuapp.com"
    const [data, setData] = useState([])
    useEffect(() => {
        const products = axios.get(baseUrl+"/products");
        products.then((res) => {
            setData(res.data);
            console.log(data)
        })
    }, [])
    return(
        <FeedBox>
            {data.map(p =>
                <FeedProduct image={p.image} price={p.price} title={p.title} rating={p.rating}/>)}
        </FeedBox>
    );
}
const FeedBox = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 30px;    
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    justify-content: center;
    align-content: center;
    @media (max-width: 500px) {
        grid-template-columns: auto;
        }  
`
