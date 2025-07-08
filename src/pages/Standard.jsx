import React from 'react';
import Header from '../components/Header';
import Display from '../components/Display';
import Keypad from '../components/Keypad';
import HistoryPanel from '../components/HistoryPanel';
import { useCalc } from '../context/CalcContext';

const standardButtons = [
  'C','(',')','DEL',
  '7','8','9','/',
  '4','5','6','*',
  '1','2','3','-',
  '0','.','=','+'
];

const Standard = () => {
  const { expression, result, history, handleInput } = useCalc();
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <Header title="Standard" />
      <Display expression={expression} result={result} />
      <Keypad buttons={standardButtons} handleInput={handleInput} />
      <HistoryPanel history={history} />
    </div>
  );
};

export default Standard;
