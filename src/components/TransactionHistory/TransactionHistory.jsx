import css from "./TransactionHistory.module.css";

export default function TransactionHistory  ({ transactions })  {
  return (
    <div className={css.transactionHistory}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>  
        </thead>
      
          <tbody>
          {transactions.map(( transaction ) => (
            <tr key={transaction.id}>
              <td className={css.td}>{transaction.type}</td>
              <td className={css.td}>{transaction.amount}</td>
              <td className={css.td}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


