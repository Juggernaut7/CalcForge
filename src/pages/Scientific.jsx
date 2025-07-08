import React from 'react';
import Header from '../components/Header';
import Display from '../components/Display';
import Keypad from '../components/Keypad';
import HistoryPanel from '../components/HistoryPanel';
import { useCalc } from '../context/CalcContext';

const scientificButtons = [
  'C','(',')','DEL',
  'sin(','cos(','tan(','log(',
  '7','8','9','/',
  '4','5','6','*',
  '1','2','3','-',
  '0','.','=','+',
  'pi','e','^','sqrt('
];

const Scientific = () => {
  const { expression, result, history, handleInput } = useCalc();
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <Header title="Scientific" />
      <Display expression={expression} result={result} />
      <Keypad buttons={scientificButtons} handleInput={handleInput} />
      <HistoryPanel history={history} />
    </div>
  );
};

export default Scientific;
