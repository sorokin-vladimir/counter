import { Counter } from "../../modules/Counter";
import { useCounters } from "./store"


export function Counters() {
  const counters = useCounters((s) => s.counters);

  return <>
    {counters.map((counter) => <Counter id={counter.id} />)}
  </>
}
