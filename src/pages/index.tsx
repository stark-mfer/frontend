import type { NextPage } from 'next'
import { MintButton } from '~/components/MintButton'
import { Chart } from '~/components/Chart'
import Image from 'next/image'
import mfers from '../images/1.png'
import { Header } from "../components/Header"
import { ERC721_STARK_MFER } from "../constants/contracts"

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Image src={mfers} alt="mfer 1" width={250} height={250}/>
      <MintButton />
      contract: <a href={`https://goerli.voyager.online/contract/${ERC721_STARK_MFER}`}>{ERC721_STARK_MFER}</a>

      <h2>Projected Future Price</h2>
      <p> The chart projects the price decline of the NFT over time given Gradual Dutch Auctions (GDAs) and the assumption that no future purchases take place. To learn more about GDAs check: <a href="https://www.paradigm.xyz/2022/04/gda">Paradigm</a></p>
      <Chart />

      <p> mfers on starknet, made with ❤️  @ ETHAmsterdam. art by sartoshi.  </p>
      <p>github <a href="https://github.com/stark-mfer">stark-mfer</a></p>
    </div>
  )
}

export default Home
