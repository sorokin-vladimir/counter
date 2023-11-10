import { useCounters } from "../../pages/Counters/store";
import { Button } from "../../ui/Button";
import classes from './styles.module.css';

type CounterProps = {
  id: number;
}

export function Counter({ id }: CounterProps) {
  const counter = useCounters((s) => s.counters.find((c) => c.id === id));
  const increase = useCounters((s) => s.increase);
  const decrease = useCounters((s) => s.decrease);

  return <div class={classes.wrapper}>
    {<Button onClick={() => decrease(id)}>-</Button>}
    {counter?.name}: {counter?.count}
    {<Button onClick={() => increase(id)}>+</Button>}
    </div>
}
