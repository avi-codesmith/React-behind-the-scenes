import { useState } from "react";

import { log } from "./log.js";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import ConfigureCounter from "./components/Counter/CountConfigure.jsx";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetChosen(count) {
    setChosenCount(count);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onset={handleSetChosen} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
