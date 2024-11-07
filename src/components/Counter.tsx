import { increment, decrement } from "../redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

function Counter() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default Counter;
