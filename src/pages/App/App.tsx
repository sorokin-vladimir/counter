import { AddNewCounter } from '../../components/AddNewCounter';
import { Header } from '../../modules/Header';
import { Counters } from '../Counters';
import './app.css';

export function App() {
  return <main>
    <Header />
    <Counters />
    <AddNewCounter />
  </main>
}
