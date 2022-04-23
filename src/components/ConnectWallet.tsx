import { useStarknet, InjectedConnector } from '@starknet-react/core'
import styled from "styled-components";

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

export function ConnectWallet() {
  const { account, connect } = useStarknet()

  if (account) {
      return <StyledButton onClick={() => {}}>{shortenAddress(account)}</StyledButton>
  }

  return <StyledButton onClick={() => connect(new InjectedConnector())}>connect wallet</StyledButton>
}


function shortenAddress(address: string) {
    const prefix = address.slice(0, 3)
    const suffix = address.slice(address.length - 3)
    return `0x${prefix}...${suffix}`
}
