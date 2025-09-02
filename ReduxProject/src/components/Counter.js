import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../store/counter/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? (<div className={classes.value}>{counter}</div>) : 'Toogle counter'}
      <div>
        {showCounter && <button onClick={incrementHandler}>Increment</button>}
        {showCounter && <button onClick={increaseHandler}>Increment by 5</button>}
        {showCounter && <button onClick={decrementHandler}>Decrement</button>}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
