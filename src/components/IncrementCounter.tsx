import { useStarknet, useStarknetInvoke } from '@starknet-react/core'
import React from 'react'
import { useDiscreteGDA } from '~/hooks/discreteGda'
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

export function IncrementCounter() {
  const { account } = useStarknet()
  const { contract: discreteGDA } = useDiscreteGDA()
  const { invoke } = useStarknetInvoke({ contract: discreteGDA, method: 'setInitialPrice' })

  if (!account) {
    return null
  }

  const onMintClicked = async () => {
	console.log('clicked')
	console.log(account)
	let ret = await invoke({ args: ['0x1'] })
	console.log(ret)
  }


/* args
        "data": [
            {
                "name": "numTokens",
                "type": "felt"
            },
            {
                "name": "to",
                "type": "felt"
            },
            {
                "name": "value",
                "type": "Uint256"
            }
        ],
		*/

// TODO: pull purchase price from contract

  return (
    <div>
      <StyledButton onClick={onMintClicked} >
	  	purchase stark mfers
	  </StyledButton>
    </div>
  )
}
