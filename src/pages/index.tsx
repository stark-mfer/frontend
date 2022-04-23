import { useStarknetCall } from '@starknet-react/core'
import type { NextPage } from 'next'
import { useMemo } from 'react'
import { toBN } from 'starknet/dist/utils/number'
import { IncrementCounter } from '~/components/IncrementCounter'
import { useDiscreteGDA } from "../hooks/discreteGda"
import { Chart } from '~/components/Chart'
import { Header } from "../components/Header"

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
      <Header />
      <p>NFT Name: {nameValue}</p>
      <IncrementCounter />
      <h2>Recent Transactions</h2>
      <Chart />
	  <div> mfers on starknet, made with ❤️  @ ETHAmsterdam. art by sartoshi </div>
    </div>
  )
}

export default Home
