import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import ERC721_STARK_MFER_ABI from '~/abi/ERC721_stark_mfer.json'
import { ERC721_STARK_MFER } from "../constants/contracts"

export function useStarkMfer() {
  return useContract({
    abi: ERC721_STARK_MFER_ABI as Abi,
    address: ERC721_STARK_MFER,
  })
}
