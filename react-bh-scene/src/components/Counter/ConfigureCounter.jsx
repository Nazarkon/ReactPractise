import { useState } from "react";
import { log } from "../../log";
export default function ConfigureCounter({ initialCount, onConfigure }) {
    log('<ConfigureCounter />', 1);
    const [enteredNumber, setEnteredNumber] = useState(initialCount);
    function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onConfigure(enteredNumber);
    setEnteredNumber(0);
  }
  return (
 <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
  );
}
