import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import discreteGDA from '~/abi/discreteGDA.json'

export function useDiscreteGDA() {
  return useContract({
    abi: discreteGDA as Abi,
    address: '0x07864d61d1aafeec03118cfd68b9e477f88cdbbe8ab035ca836a27e3afc21254',
  })
}
