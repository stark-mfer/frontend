import type { NextPage } from 'next'
import { ConnectWallet } from '~/components/ConnectWallet'
import { MintButton } from '~/components/MintButton'
import { useStarkMfer } from '../hooks/useStarkMfer'
import { Chart } from '~/components/Chart'
import Image from 'next/image'
import mfers from 'nfts/flipped/images/1.png'
declare module "*.png"


const Home: NextPage = () => {
  const { contract: starkMfer } = useStarkMfer()

  return (
    <div>
      <h1>stark mfers</h1>
      <Image src={mfers} alt="mfers 1"
        width={250}
        height={250}/> 
      <p> mfers on starknet, made with ❤️  @ ETHAmsterdam. art by sartoshi.  </p>

      <ConnectWallet />
      <p></p>

      <MintButton />
      <p>contract: {discreteGDA?.address}</p>

      <h2>Projected Future Price</h2>
      <p> The chart projects the price decline of the NFT over time given Gradual Dutch Auctions (GDAs) and the assumption that no future purchases take place. To learn more about GDAs check: <a href="https://www.paradigm.xyz/2022/04/gda">Paradigm</a></p>
      <p>contract: {starkMfer?.address}</p>
      <Chart />

      <h2>About</h2>
      <p> This Project took an existing NFT collection <a href="https://mfers.art/">https://mfers.art/</a>, flipped it vertically, added new features and deployed the NFT on Starknet via Gradua Dutch Auctions (GDAs)</p> 

      <h2>Repository</h2>
      <p> <a href="https://github.com/stark-mfer">Github Repository</a></p>
    </div>
  )
}

export default Home
