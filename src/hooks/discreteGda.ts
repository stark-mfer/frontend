import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import discreteGDA from '~/abi/discreteGDA.json'

export function useDiscreteGDA() {
  return useContract({
    abi: discreteGDA as Abi,
    address: '0x0385b7cb0647938ce0b7b9df35bf828b1c9f9930f18d75bdcc865a233a04c9e0',
  })
}
