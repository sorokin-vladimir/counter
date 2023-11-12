import { useCounters } from '../../pages/Counters/store';
import { Button } from '../../ui/Button';
import classes from './header.module.css';

export function Header() {
  const total = useCounters((s) => s.counters).reduce((acc, c) => acc + c.count, 0);
  const reset = useCounters((s) => s.reset)

  return <header class={classes.header}>
    <Button onClick={reset}>Reset</Button>
    <div class={classes.total}>Total: {total}</div>
  </header>
}
