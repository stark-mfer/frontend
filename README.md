# stark-mfer-frontend

This is the front-end for [https://github.com/rootulp/eth-amsterdam](https://github.com/rootulp/eth-amsterdam)

## Installation

1. Clone this repo
2. Run in your shell: 
```bash
yarn install
yarn dev
```
3. open localhost

## How to interact with the Front-End 
1. You will need an Argent X wallet. If you don't have one, open one here: [https://www.argent.xyz/argent-x/](https://www.argent.xyz/argent-x/)
2. Get free test ETH for the Starknet by inputting your address from Argent X in: [https://faucet.goerli.starknet.io/](https://faucet.goerli.starknet.io/)
3. Connect your wallet to the website or open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. Start Minting your flipped mfers! 

## Tasks

- [x] Point the front-end to the deployed GDA contract
- [x] Add a "Mint" button
- [x] Constants for deployed addresses
- [x] Add image of existing mfer
- [ ] Deploy this app to Vercel
- [ ] Display the current price of an mfer (@rootulp blocked)
- [ ] Display number of mfers left (needs a new view method on contract @fred)
- [ ] Implement disconnect wallet (seems tricky b/c no `disconnect` function in `@starknet-react/core`)
- [ ] Add a chart that displays historical purchase prices (by looking at the `purchase_event` events)
- [ ] Polish UI

## Links

- <https://nextjs.org/docs>
- <https://nextjs.org/learn>
- <https://github.com/ccarnino/cairo-utils-web>
- <https://testnet.playoasis.xyz/>
- <https://github.com/auclantis/starknet-react>
