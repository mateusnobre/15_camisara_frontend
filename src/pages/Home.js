import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Feed from '../components/home/Feed'
export default function Home() {
    return(
        <HomeBox>
            <Topbar title="loja"/>
            <Feed/>
        </HomeBox>
    )
}

const HomeBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`
