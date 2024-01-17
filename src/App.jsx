import "./App.css";
import Input from "./components/Input.jsx";

import { useState } from "react";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [clickCount, setClickCount] = useState(1);

  const handleClick = () => {
    setInputValue("");
    setClickCount(clickCount + 1);
  }

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const buttonClassName = clickCount % 2 === 0 ? "red" : "";
    return (
      <div className="App">
        <Input value={inputValue} onChange={handleChange} />
        <button className={buttonClassName} onClick={handleClick}>
          Очистить поле
        </button>
      </div>
    );
  };
