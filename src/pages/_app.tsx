import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { InjectedConnector, StarknetProvider } from '@starknet-react/core'
import { StarknetReactProvider } from '@web3-starknet-react/core'
import { Provider } from 'starknet'

function getLibrary(provider?: Provider) {
    return new Provider(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = [new InjectedConnector()]

  return (
    <StarknetReactProvider getLibrary={getLibrary}>
        <StarknetProvider autoConnect connectors={connectors}>
        <NextHead>
            <title>eth-amsterdam-front</title>
        </NextHead>
        <Component {...pageProps} />
        </StarknetProvider>
    </StarknetReactProvider>
  )
}

export default MyApp
