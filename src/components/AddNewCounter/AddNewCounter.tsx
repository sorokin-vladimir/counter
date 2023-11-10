import { useState } from "preact/hooks";
import { useCounters } from "../../pages/Counters/store";
import { Button } from "../../ui/Button";
import classes from './styles.module.css';

export function AddNewCounter() {
  const [value, setValue] = useState('');
  const add = useCounters((s) => s.add);

  const handleClick = () => {
    add(value);
    setValue('');
  }

  return <div class={classes.wrapper}>
    <input value={value} onInput={(e) => setValue((e.target as EventTarget & { value: string }).value)} />
    <Button onClick={handleClick}>Add new counter</Button>
  </div>
}
