import { useCounters } from "../../pages/Counters/store";
import { Button } from "../../ui/Button";
import classes from './style.module.css';

type CounterProps = {
  id: number;
}

export function Counter({ id }: CounterProps) {
  const counter = useCounters((s) => s.counters.find((c) => c.id === id));
  const increase = useCounters((s) => s.increase);
  const decrease = useCounters((s) => s.decrease);
  const remove = useCounters(s => s.remove);

  return <>
    <Button onClick={() => remove(id)}>Del</Button>
      <span class={classes.name}>{counter?.name}:</span>
      <Button onClick={() => decrease(id)}>-</Button>
      <span class={classes.count}>{counter?.count}</span>
    <Button onClick={() => increase(id)}>+</Button>
    </>
}
