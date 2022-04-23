import type { NextPage } from 'next'
import { MintButton } from '~/components/MintButton'
import { Chart } from '~/components/Chart'
import Image from 'next/image'
import mfers from '../images/1.png'
import { Header } from "../components/Header"
import { ERC721_STARK_MFER } from "../constants/contracts"
import styled from 'styled-components'
declare module "*.png"


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
                <a href={`https://testnet.playoasis.xyz/collection/${ERC721_STARK_MFER}`}>Check it on Oasis</a>
                </StyledDescription>
            </SideContainer>
        </MainContainer>
                <StyledDescription >
        contract: <a href={`https://goerli.voyager.online/contract/${ERC721_STARK_MFER}`}>{ERC721_STARK_MFER}</a>
                </StyledDescription>

        <h2>projected future price</h2>
        <StyledDescription> the chart projects the price decline of the NFT over time given Gradual Dutch Auctions (GDAs) and the assumption that no future purchases take place. to learn more about GDAs check: <a href="https://www.paradigm.xyz/2022/04/gda">Paradigm</a></StyledDescription>
        <Chart />

        <p> mfers on starknet, made with ❤️  @ ETHAmsterdam. art by sartoshi.  </p>
        <p>github <a href="https://github.com/stark-mfer">stark-mfer</a></p>
        </WrapperContainer>
    </div>
  )
}

export default Home
