// src/utils/calculate.js
import { evaluate, pi, e } from 'mathjs';

export const calculateExpression = (expr) => {
  try {
    let transformed = expr
      .replace(/HEX([0-9A-Fa-f]+)/g, (_, hex) =>
        parseInt(hex, 16).toString()
      )
      .replace(/\b([A-Fa-f]+)\b/g, (m) => parseInt(m, 16).toString())
      .replace(/\bAND\b/g, '&')
      .replace(/\bOR\b/g, '|')
      .replace(/\bXOR\b/g, '^')
      .replace(/\bNOT\b/g, '~')
      .replace(/pi/g, `${pi}`)
      .replace(/e/g, `${e}`);

    const value = evaluate(transformed);
    return Number.isInteger(value)
      ? value.toString(16).toUpperCase()
      : Math.round(value).toString(16).toUpperCase();
  } catch (err) {
    return 'Error';
  }
};

// Finance logic — monthly payment, total, interest
export const calculateLoan = (principal, annualRate, years) => {
  const P = principal;
  const i = annualRate / 100 / 12;
  const n = years * 12;

  let M;
  if (i === 0) {
    M = P / n;
  } else {
    M = (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }

  const totalPayment = M * n;
  const totalInterest = totalPayment - P;

  return {
    monthly: M,
    total: totalPayment,
    interest: totalInterest,
  };
};
