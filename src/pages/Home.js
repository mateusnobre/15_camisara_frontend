import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Feed from '../components/Home/Feed'
export default function Home() {
    return(
        <HomeBox>
            <Topbar/>
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
