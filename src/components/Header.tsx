import styled from "styled-components";
import { ConnectWallet } from "./ConnectWallet";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  `;

export function Header() {
    return(
        <StyledHeader>
          <h1>stark mfers</h1>
          <ConnectWallet />
        </StyledHeader>
    )
}
