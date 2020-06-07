# Promises

## Определение
**Промис** — обертка для значения, неизвестного на момент создания промиса.

Промис может находиться одном из трёх состояний:
- ожидание (pending): начальное состояние, не исполнен и не отклонен;
- исполнено (fulfilled): операция завершена успешно;
- отклонено (rejected): операция завершена с ошибкой;

Мы можем подписаться на событие разрешения промиса. В момент изменения состояния сработает колбэк. Если в момент назначения обработчика промис уже исполнен или отклонен, обработчик все равно будет вызван.

Подписаться на успешное выполнение промиса можно с помощью метода `then`:
```js
promise.then(() => console.log('Done!'));
```

Подписаться на неудачное выполнение — вторым аргументом `then`:
```js
promise.then(
  () => console.log('Done!'),
  () => console.log('Error!')
);
```

### Демо
```js
  fsPromises.readFile
```

## Конструктор промиса

Мы хотим создавать свои промисы — для этого у нас есть конструктор `Promise`.


### Демо

Промисификация функций

## Цепочки промисов

### Демо 1

Промис delay

### Демо 2

```js
const doSomething = () => new Promise(r => setTimeout(r, 1000, 'first'));
const doSomethingElse = () => new Promise(r => setTimeout(r, 2000, 'second'));

doSomething().then(function () {
  return doSomethingElse();
}).then(console.log);

doSomething().then(function () {
  doSomethingElse();
}).then(console.log);

doSomething().then(doSomethingElse()).then(console.log);

doSomething().then(doSomethingElse).then(console.log);
```
### Демо 3

Promise.resolve, Promise.reject


Тут хорошо бы разобрать этот пример:

```js
Promise.resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3));

Promise.resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6));

```

## Promise API: then, catch, finally

Три метода для подписки на промис

## Запускаем параллельно 

### Демо
race, allSettled, all

## Синтаксический сахар async/await
