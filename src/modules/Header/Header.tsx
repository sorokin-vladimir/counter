import { useCounters } from '../../pages/Counters/store';
import classes from './header.module.css';

export function Header() {
  const total = useCounters((s) => s.counters).reduce((acc, c) => acc + c.count, 0);

  return <header class={classes.header}>
    <div class={classes.total}>total: {total}</div>
  </header>
}
