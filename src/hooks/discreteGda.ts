import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import discreteGDA from '~/abi/discreteGDA.json'

export function useDiscreteGDA() {
  return useContract({
    abi: discreteGDA as Abi,
    address: '0x01e46339056093f0f242ed11aef687ec145a785ddefc125ade1f8d60d0bc64e6',
  })
}
