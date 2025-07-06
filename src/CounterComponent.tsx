import React from "react"
import useCounter from "./useCounter"

const CounterComponent: React.FC = () => {
  const [store] = useCounter()

  return (
    <div>
      <h1>Count: {store.count}</h1>
      <button onClick={store.increment}>Increment</button>
      <button onClick={store.decrement}>Decrement</button>
    </div>
  )
}

export default CounterComponent
