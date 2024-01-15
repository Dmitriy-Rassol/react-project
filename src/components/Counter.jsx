import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(false);

  const handlerIncrement = () => {
    if (counter < 5) {
      setCounter(counter + 1);
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const handlerDecrement = () => {
    if (counter > -5) {
      setCounter(counter - 1);
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
        handlerIncrement();
    } else if (event.key === 'ArrowDown') {
        handlerDecrement();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  })

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Счётчик в диапазоне от -5 до 5</h3>
        <div style={{ width: "100%" }}>
          <p style={{ textAlign: "center" }}>
            Текущее значение счетчика: {counter}
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button onClick={handlerDecrement}>Уменьшить</button>
            <button onClick={handlerIncrement}>Увеличить</button>
          </div>
        </div>
      </div>{" "}
      <p style={{position:"absolute", left: "50%", transform: "translateX(-50%)", width: "100%"}}>
        {" "}
        {active && (
          <p style={{ color: "red", textAlign: "center"}}>
            Предупреждение: Значение счетчика вне допустимого диапазона
          </p>
        )}
      </p>
    </div>
  );
};

export default Counter;
