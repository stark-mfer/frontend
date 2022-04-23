# frontend

## how to claim a stark mfer

1. You will need an Argent X wallet. If you don't have one, download [https://www.argent.xyz/argent-x/](https://www.argent.xyz/argent-x/) and create a wallet
1. get goerli testnet ETH for the Starknet by inputting your address from Argent X in: [https://faucet.goerli.starknet.io/](https://faucet.goerli.starknet.io/)
1. navigate to [https://stark-mfers.vercel.app/](https://stark-mfers.vercel.app/)
1. connect your wallet
1. mint a stark mfer

## local development

1. clone this repo
2. run in your shell

    ```bash
    yarn install
    yarn dev
    ```

3. navigate to <http://localhost:3000/>

## more work

- [ ] display the current price of an mfer (@rootulp blocked)
- [ ] display number of mfers left
- [ ] implement disconnect wallet (seems tricky b/c no `disconnect` function in `@starknet-react/core`)
- [ ] add a chart that displays historical purchase prices (by looking at the `purchase_event` events)

## Links

- <https://nextjs.org/docs>
- <https://nextjs.org/learn>
- <https://github.com/ccarnino/cairo-utils-web>
- <https://testnet.playoasis.xyz/>
- <https://github.com/auclantis/starknet-react>
