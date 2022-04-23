import { useStarknet, InjectedConnector } from '@starknet-react/core'
import styled from "styled-components";

const StyledButton = styled.button`
  border: 6px solid #000 !important;
  border-radius: 10px !important;
  padding: 20px 15px !important;
  text-decoration: none !important;
  color: #000 !important;
  text-transform: lowercase !important;
  font-size: 28px !important;
  width: 220px !important;
  line-height: 1.3em !important;
  font-weight: 600 !important;
  letter-spacing: 2px !important;
  text-align: center !important;
  transition: all 0.3s ease 0s !important`;

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
