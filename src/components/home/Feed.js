import styled from 'styled-components'
import FeedProduct from './FeedProduct'
import axios from 'axios'
import { useEffect, useState} from 'react'
import baseUrl from '../BaseURL'

export default function Feed() {
    const [data, setData] = useState([])
    useEffect(() => {
        const products = axios.get(baseUrl+"/products");
        products.then((res) => {
            setData(res.data);
        })
    }, [data])
    return(
        <FeedBox>
            {data.map(p =>
                <FeedProduct id={p.id} image={p.main_image} price={p.price} title={p.title} rating={p.rating}/>)}
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
