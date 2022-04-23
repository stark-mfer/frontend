import { useStarknetCall } from '@starknet-react/core'
import type { NextPage } from 'next'
import { useMemo } from 'react'
import { toBN } from 'starknet/dist/utils/number'
import { ConnectWallet } from '~/components/ConnectWallet'
import { IncrementCounter } from '~/components/IncrementCounter'
import { TransactionList } from '~/components/TransactionList'
import { useCounterContract } from '~/hooks/counter'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useDiscreteGDA } from "../hooks/gda"

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Home: NextPage = () => {
  const { contract: counter } = useCounterContract()
  const { contract: discreteGDA } = useDiscreteGDA()

  // This is the frontend chart
  const labels = ['January', 'February', 'March'];

  const data_line = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  }

  const { data: counterResult } = useStarknetCall({
    contract: counter,
    method: 'counter',
    args: [],
  })

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

  const counterValue = useMemo(() => {
    if (counterResult && counterResult.length > 0) {
      const value = toBN(counterResult[0])
      return value.toString(10)
    }
  }, [counterResult])

  return (
    <div>
      <h2>Wallet</h2>
      <ConnectWallet />
      <h2>Monta's Counter Contract</h2>
      <p>Address: {counter?.address}</p>
      <p>Value: {counterValue}</p>
      <p>Name result: {nameValue}</p>
      <IncrementCounter />
      <h2>Recent Transactions</h2>
      <TransactionList />
      <Line data = {data_line}/>
    </div>
  )
}

export default Home
