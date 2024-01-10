import './App.css'
import Button from './components/Button.jsx';
import Input from './components/Input.jsx';

import { useState } from 'react';
export default function App () {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='App'>
      <Input value={inputValue} onChange={handleChange} />
      <Button onClick={handleClick} text="Очистить поле"/>
    </div>
  );
}


