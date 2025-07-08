// src/context/CalcContext.jsx
import { createContext, useContext, useState } from 'react';
import { calculateExpression } from '../utils/calculate'; // now using your core logic
import { toast } from 'react-toastify';

const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleInput = (val) => {
    if (val === 'C') {
      setExpression('');
      setResult('');
    } else if (val === '=') {
      const res = calculateExpression(expression);
      if (res === 'Error') {
        toast.error('Invalid Expression', {
          position: 'bottom-center',
          autoClose: 2000,
        });
      } else {
        setResult(res);
        setExpression(res);
        setHistory((h) => [`${expression} = ${res}`, ...h].slice(0, 10));
      }
    } else if (val === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression((prev) => prev + val);
    }
  };

  return (
    <CalcContext.Provider
      value={{ expression, result, history, handleInput }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export const useCalc = () => useContext(CalcContext);
