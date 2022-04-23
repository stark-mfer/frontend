import { useStarknet, useStarknetInvoke } from '@starknet-react/core'
import React from 'react'
import { useStarkMfer } from '~/hooks/useStarkMfer'
import styled from 'styled-components'

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
  const { contract: discreteGDA } = useStarkMfer()
  const { loading, error, reset, invoke } = useStarknetInvoke({ contract: discreteGDA, method: 'purchaseTokens' })

  console.log( 'loading', loading, 'error', error, )

  if (!account) {
    return null
  }

  const onMintClicked = async () => {
    console.log('clicked')
    console.log(account)
    let ret = await invoke({ args: ['0x1', account, ['0x1', '0x0']] })
    console.log(ret)
  }


// TODO: pull purchase price from contract
  return (
    <div>
      <StyledButton onClick={onMintClicked} >
          purchase stark mfers
      </StyledButton>
    </div>
  )
}
