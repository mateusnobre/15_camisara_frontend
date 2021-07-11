import styled from 'styled-components'
import FeedProduct from './FeedProduct'
export default function Feed() {
    const url = 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9b9c785d6e5747bc90dbacd401629893_9366/Camisa_1_CR_Flamengo_21-22_Vermelho_GG0995_01_laydown.jpg'
    return(
        <FeedBox>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
            <FeedProduct image={url} price={20} title="camisa flamengo 90 anos" rating={4.6} free_shipping={true}/>
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
