import type { NextPage } from 'next'
import { MintButton } from '~/components/MintButton'
import { Chart } from '~/components/Chart'
import Image from 'next/image'
import mfers from '../images/1.png'
import { Header } from "../components/Header"
import { ERC721_STARK_MFER } from "../constants/contracts"
import styled from 'styled-components'
declare module "*.png"

const StyledFooter = styled.footer`
    margin-top: 50px;
`

const StyledDescription = styled.div`
    font-size: 24px;
`

const WrapperContainer = styled.div`
    margin: auto;
`
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-bottom: 30px;
  padding-top: 30px;
`

const MainImage = styled.div`
  display: flex;
  grid-column: 1 / span 2;
  width: 100%;
`

const SideContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  place-items: center;
  align-content: center;
  gap: 50px;
`


const Home: NextPage = () => {
  return (
    <div>
        <WrapperContainer>
        <Header />
        <MainContainer>
            <MainImage>
            <Image src={mfers} alt="mfer 1" />
            </MainImage>
            <SideContainer>
                <MintButton />
                <StyledDescription>
                    check it on <a href={`https://testnet.playoasis.xyz/collection/${ERC721_STARK_MFER}`}>oasis</a> or <a href={`https://goerli.voyager.online/contract/${ERC721_STARK_MFER}`}>voyager</a>
                </StyledDescription>
            </SideContainer>
        </MainContainer>
        <h2>projected mint price</h2>
        <StyledDescription> assuming that no future purchases take place. to learn more about gradual dutch auctions see this giga 🧠 <a href="https://www.paradigm.xyz/2022/04/gda">writing</a></StyledDescription>
        <Chart />
        <StyledFooter>
            made with ❤️ at <a href="https://amsterdam.ethglobal.com/">EthAmsterdam</a>. art by <a href="https://twitter.com/sartoshi_nft">sartoshi</a>. github <a href="https://github.com/stark-mfer">stark-mfer</a>
        </StyledFooter>
        </WrapperContainer>
    </div>
  )
}

export default Home
