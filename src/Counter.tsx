import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  // Postavlja vrednost iz inputa
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
  };

  // Postavlja brojač na unetu vrednost
  const handleSetCounter = (): void => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setCount(value);
    }
  };

  const handleIncrement = (): void => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    setCount((prev) => prev - 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "5px",
          fontSize: "16px",
          width: "80px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleSetCounter}
        style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
      >
        Set Counter
      </button>
      <h2>{count}</h2>
      <div>
        <button
          onClick={handleIncrement}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
