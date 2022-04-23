import { Transaction, useStarknetTransactionManager } from '@starknet-react/core'
import React from 'react'

function PurchaseItem({ transaction }: { transaction: Transaction }) {
  return (
    <span>
      {transaction.transactionHash} - {transaction.status}
    </span>
  )
}

export function PurchaseList() {
  const { transactions } = useStarknetTransactionManager()
  return (
    <div>
      <h2>Purchase List</h2>
      <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          <PurchaseItem transaction={transaction} />
        </li>
      ))}
      </ul>
    </div>
  )
}
