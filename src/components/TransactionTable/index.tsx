import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionTable() {
  interface Transactions{
    title: string,
    amount: string,
    category: string,
    createAt: string,
    type: string,
  }

  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response) => setTransactions(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trans) => (
            <tr key={trans.title}>
              <td>{trans.title}</td>
              <td className={trans.type === 'deposit' ? 'Entrada' : 'Saida'}>{trans.amount}</td>
              <td>{trans.category}</td>
              <td>{trans.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
