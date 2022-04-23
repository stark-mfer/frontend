import { useStarknet, InjectedConnector } from '@starknet-react/core'
import styled from "styled-components";

export function ConnectWallet() {
  const { account, connect } = useStarknet()

  if (account) {
      return <button onClick={() => {}}>{shortenAddress(account)}</button>
  }

  return <button onClick={() => connect(new InjectedConnector())}>connect wallet</button>
}


function shortenAddress(address: string) {
    const prefix = address.slice(0, 3)
    const suffix = address.slice(address.length - 3)
    return `0x${prefix}...${suffix}`
}
