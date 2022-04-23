import { useStarknet, useStarknetCall, useStarknetInvoke } from '@starknet-react/core'
import React, { useMemo } from 'react'
import { useStarkMfer } from '~/hooks/useStarkMfer'
import styled from 'styled-components'
import { toBN } from "starknet/dist/utils/number";

// Styled component named StyledButton
const StyledButton = styled.button`
  border: 6px solid #000;
  border-radius: 10px;
  padding: 20px 15px;
  text-decoration: none;
  color: #000;
  text-transform: lowercase;
  font-size: 28px;
  width: 220px;
  line-height: 1.3em;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.3s ease 0s`;

export function MintButton() {
  const { account } = useStarknet()
  const { contract: starkMfer } = useStarkMfer()
  const { data: purchasePrice, loading: purchaseLoading, error: purchaseError } = useStarknetCall({
    contract: starkMfer,
    method: 'DiscreteGDA_purchase_price',
    args: ['1'],
  })
//   const purchasePriceValue = useMemo(() => {
//     console.log(purchasePrice)
//     if (purchasePrice && purchasePrice.length > 0) {
//       const value = toBN(purchasePrice[0])
//       return value.toString(10)
//     }
//   }, [purchasePrice])

  const { invoke } = useStarknetInvoke({ contract: starkMfer, method: 'purchaseTokens' })

  if (!account) {
    return null
  }

  const onMintClicked = async () => {
    console.log('clicked')
    console.log(account)
    let ret = await invoke({ args: ['0x1', account, ['0x1', '0x0']] })
    console.log(ret)
  }


  return (
    <div>
      <StyledButton onClick={onMintClicked} >
          mint stark mfer
      </StyledButton>
      {/* {purchasePriceValue} ETH */}
    </div>
  )
}
