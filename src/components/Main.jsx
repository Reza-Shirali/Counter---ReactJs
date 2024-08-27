import React, { useState } from "react";

import styles from "../components/Main.module.css";

function Main() {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter((counter) => ++counter);
  };
  const minesHandler = () => {
    setCounter((counter) => --counter);
  };

  return (
    <>
      <main className={styles.main}>
        <button onClick={addHandler}>+</button>
        <div className={styles.show}>{counter}</div>
        <button onClick={minesHandler}>-</button>
      </main>
    </>
  );
}

export default Main;
