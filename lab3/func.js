'use strict';

/**
 * Возвращает n-ое число Фибоначчи.
 * @param {number} n номер искомого числа Фибоначчи
 * @param {BigInt} a - первый рекурсивный аргумент
 * @param {BigInt} b - второй рекурсивный аргумент
 * @return {BigInt} n-oe число Фибоначчи
 */
export function fib(n, a = 0n, b = 1n) {
  if (n === 0) return a;
  return fib(n - 1, b, a + b);
}