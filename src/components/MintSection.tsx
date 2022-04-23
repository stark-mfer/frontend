import { useStarknet, useStarknetCall, useStarknetInvoke } from '@starknet-react/core'
import React, { useMemo } from 'react'
import { toBN } from "starknet/dist/utils/number"
import { useStarkMfer } from "../hooks/discreteGda"

export function MintSection() {
  const { account } = useStarknet()
  const { contract: discreteGDA } = useStarkMfer()
  const { invoke: purchaseTokens } = useStarknetInvoke({ contract: discreteGDA, method: 'purchaseTokens' })
  const NUM_TOKENS = 1;

  const { data: purchasePriceResult } = useStarknetCall({
    contract: discreteGDA,
    method: 'purchase_price',
    args: [NUM_TOKENS],
  })

  const purchasePriceValue = useMemo(() => {
    console.log(purchasePriceResult)
    if (purchasePriceResult && purchasePriceResult.length > 0) {
      const value = toBN(purchasePriceResult[0])
      return value.toString(10)
    }
  }, [purchasePriceResult])

  if (!account) {
    return null
  }

  return (
    <div>
      Num tokens: {NUM_TOKENS}
      Purchase price: {purchasePriceValue}
      <button onClick={() => purchaseTokens({ args: ['0x1'] })}>Purchase Tokens</button>
    </div>
  )
}
