import styled from "styled-components";
import { ConnectWallet } from "./ConnectWallet";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  `;

export function Header() {
    return(
        <div>
          <h1>stark mfers</h1>
          <ConnectWallet />
        </div>
    )
}
