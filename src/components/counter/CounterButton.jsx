export default function CounterButton({
  by,
  incrementMethod,
  decrementMethod,
}) {
  function incrementCounterFunction() {
    incrementMethod(by);
  }

  function deccrementCounterFunction() {
    decrementMethod(by);
  }

  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={incrementCounterFunction}>
          +{by}
        </button>
        <button className="counterButton" onClick={deccrementCounterFunction}>
          -{by}
        </button>
      </div>
    </div>
  );
}
