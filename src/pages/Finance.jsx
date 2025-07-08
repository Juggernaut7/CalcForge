import React, { useState } from 'react';
import Header from '../components/Header';
import { calculateLoan } from '../utils/calculate';

const Finance = () => {
  const [P, setP] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const loan = calculateLoan(+P, +rate, +years);
    setResult(loan);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <Header title="Finance" />
      <form onSubmit={handleCalculate} className="space-y-4 mb-4">
        {[
          { label: 'Principal (P)', value: P, setter: setP },
          { label: 'Annual Rate (%)', value: rate, setter: setRate },
          { label: 'Term (years)', value: years, setter: setYears },
        ].map(({ label, value, setter }) => (
          <div key={label}>
            <label className="block mb-1">{label}</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
              value={value}
              onChange={(e) => setter(e.target.value)}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="space-y-2 text-gray-800 dark:text-gray-200">
          <p>Monthly Payment: <b>${result.monthly.toFixed(2)}</b></p>
          <p>Total Payment: <b>${result.total.toFixed(2)}</b></p>
          <p>Total Interest: <b>${result.interest.toFixed(2)}</b></p>
        </div>
      )}
    </div>
  );
};

export default Finance;
