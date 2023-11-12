import { Counter } from "../../modules/Counter";
import { useCounters } from "./store"
import classes from './styles.module.css';

export function Counters() {
  const counters = useCounters((s) => s.counters);

  return <div class={classes['counters-wrapper']}>
    {counters.map((counter) => <Counter id={counter.id} />)}
  </div>
}
