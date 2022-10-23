## all

Во все задачах нужно написать функцию, которая принимает массив асинхронных функций (возвращающих промис) и возвращает промис с массивом результатов всех функций. Порядок значений в возвращаемом масиве должен соответствовать порядку функций.

Пример:

```js
const f = (value, ms = Math.random() * 1000 + 500) => new Promise((resolve) => {
  setTimeout(() => resolve(value), ms);
});

const apple = x => f("🍎");
const grape = x => f("🍇");
const mango = x => f("🥭");
  
solve([apple, grape, mango]).then(console.log) // ["🍎", "🍇", "🥭"]

// Реализация с помощью функции Promise.all выглядела бы так:

function solve(fns) {
  return Promise.all(fns.map(fn => fn()));
}
```

1. Написать функцию allSequentially, которая выполняет переданные функции последовательно.
2. Написать функцию allParallel, которая выполняет переданные функции параллельно.
2. Написать функцию allLimited, которая выполняет не более N функций одновременно.

## withRetry
  
Допустим, у нас есть асинхронная функция, которая иногда реджектится, а иногда резолвится с какой-то вероятностью.
  
```js
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        resolve(a + b);
      } else {
        reject('err');
      }
    }, 500);
  });
}
```
 
Если ее запустить 10_000 раз, то примерно 3_000 будут успешными, а 7_000 неуспешными.

Реализовать фунцию-декоратор `withRetry(fn, n)`, которая принимает асихронную функцию и количетсво попыток получить успешный результат, а возвращает новую функцию, которая работает как старая, но внутри делает не более N попыток, чтобы получить ответ. Если даже за N попыток не получилось получить успешный результат, то она возвращает реджект из последней попытки. 
                     
```js
  const sumWithRetry = withRetry(sum, 4);
                              
  sumWithRetry(3, 2).then(console.log, console.log); // 5 с вероятностью 76% и 'err' с вероятностью 24%
```                
                              
Если ее запустить 10_000 раз, то примерно 7_600 будут успешными, а 2_400 неуспешными.

## promisify

## folder

Три реализации: callback / promises / async-await

##  polyfills

- Promise.all()
- Promise.allSettled()
- Promise.any()
- Promise.race()
- Promise.reject()
- Promise.resolve()
- Promise.prototype.catch()

## delay

```js
const plus1 = x => new Promise(r => setTimeout(r, 1000, x + 1))
const plus2 = x => new Promise(r => setTimeout(r, 2000, x + 2))
const plus3 = x => new Promise(r => setTimeout(r, 3000, x + 3))
const plus4 = x => new Promise(r => setTimeout(r, 4000, x + 4))
const plus5 = x => new Promise(r => setTimeout(r, 5000, x + 5))

Promise.resolve(0)
  .then(plus1)
  .then(plus2)
  .then(plus3)
  .then(plus4)
  .then(plus5)
  .then(console.log) // число 15 через 15 секунд
```

Написать функцию delay:

```js
Promise.resolve(0)
  .then(plus1)
  .then(plus2)
  .then(plus3)
  .then(delay(7000))
  .then(plus4)
  .then(plus5)
  .then(console.log) // число 15 через 22 секунд
```

## async pipeline

```js
const mult3 = x => f(x * 3, 500);
const devide5 = x => f(x / 5, 1500);
const square = x => f(x ** 2, 2000);

doAsyncPipeline([mult3, devide5, square], 10).then(x => {
   console.log(x); // 36
});

```
