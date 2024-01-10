import './App.css'
import {useEffect, useState} from 'react';

const styles = {color: 'blue', fontSize: '50px'}

export default function App () {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 1000))
  }, [])

  return (
    <div className='App'>
      <h1 className='red big'>Привет число!</h1>
      <h2 style={styles}>Я число - {number}</h2>
    </div>
  );
}


