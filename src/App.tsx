import "./App.css";
import { useCounterStore } from "./store/CounterStore";

function App() {
  const { title, count } = useCounterStore();
  const { increment, decrement } = useCounterStore();

  return (
    <>
      <h1>Zustand Tests</h1>
      <h2>title: {title}</h2>
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          decrement(1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          increment(1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
