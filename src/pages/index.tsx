import type { NextPage } from 'next'
import { ConnectWallet } from '~/components/ConnectWallet'
import { MintButton } from '~/components/MintButton'
import { useStarkMfer } from '../hooks/useStarkMfer'
import { Chart } from '~/components/Chart'


const Home: NextPage = () => {
  const { contract: starkMfer } = useStarkMfer()

  return (
    <div>
      <h2>stark mfers</h2>
      <ConnectWallet />
      <p> mfers on starknet, made with ❤️  @ ETHAmsterdam. art by sartoshi.  </p>
      <MintButton />
      <p>contract: {starkMfer?.address}</p>
      <Chart />
    </div>
  )
}

export default Home
