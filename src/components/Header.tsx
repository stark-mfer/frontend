import { ConnectWallet } from '~/components/ConnectWallet'
import {Button, Container, Navbar as BootstrapNavbar} from "react-bootstrap";
import { useStarknet } from "@starknet-react/core";

export function Header() {
    const { account, error } = useStarknet()
    // return (<div>
    //
    // </div>)
    return (
        <BootstrapNavbar fixed="top" variant="dark" bg="dark">
            <Container>
            <BootstrapNavbar.Brand>stark mfers</BootstrapNavbar.Brand>
            {error ? error : null}
            {account ? (
                <Button onClick={() => {}} variant="secondary">
                    Account: {account}
                </Button>
                ) : (
                    <ConnectWallet />
                )}
            </Container>
        </BootstrapNavbar>
        )
}
