import { useStarknetCall } from '@starknet-react/core'
import type { NextPage } from 'next'
import { useMemo } from 'react'
import { toBN } from 'starknet/dist/utils/number'
import { ConnectWallet } from '~/components/ConnectWallet'
import { MintButton } from '~/components/MintButton'
import { useStarkMfer } from '../hooks/useStarkMfer'
import { Chart } from '~/components/Chart'


const Home: NextPage = () => {
  const { contract: discreteGDA } = useStarkMfer()


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
      <MintButton />
      <p>contract: {discreteGDA?.address}</p>
      <Chart />
    </div>
  )
}

export default Home
