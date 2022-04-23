import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import ERC721_stark_mfer from '~/abi/ERC721_stark_mfer'

export function useStarkMfer() {
  return useContract({
    abi: ERC721_stark_mfer as Abi,
    address: '0x04ffe192e88fa9239c633c2f6c39ae1b67097d896b8564ae331f9ecb0e9c64fc',
  })
}
