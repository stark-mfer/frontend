import { useStarknetCall } from '@starknet-react/core'
import type { NextPage } from 'next'
import { useMemo } from 'react'
import { toBN } from 'starknet/dist/utils/number'
import { ConnectWallet } from '~/components/ConnectWallet'
import { PurchaseList } from '~/components/PurchaseList'
import { IncrementCounter } from '~/components/IncrementCounter'
import { useDiscreteGDA } from "../hooks/discreteGda"
import { MintSection } from "../components/MintSection"
import { Chart } from '~/components/Chart'


const Home: NextPage = () => {
  const { contract: discreteGDA } = useDiscreteGDA()


  const { data: nameResult } = useStarknetCall({
    contract: discreteGDA,
    method: 'name',
    args: [],
  })

  const nameValue = useMemo(() => {
    console.log(nameResult)
    if (nameResult && nameResult.length > 0) {
      const value = toBN(nameResult[0])
      return value.toString(10)
    }
  }, [nameResult])

  return (
    <div>
      <h2>stark mfers</h2>
      <ConnectWallet />
	  <p> mfers on starknet, made with ❤️  @ ETHAmsterdam. art by sartoshi.  </p>
      <p>NFT Name: {nameValue}</p>
      <IncrementCounter />
      <h2>Recent Transactions</h2>
      <Chart />
    </div>
  )
}

export default Home
