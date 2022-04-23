import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import discreteGDA from '~/abi/discreteGDA.json'

export function useDiscreteGDA() {
  return useContract({
    abi: discreteGDA as Abi,
    address: '0x04043a6c937666e9613c392f233e746814c9324c01c304aa077831166e71639b',
  })
}
