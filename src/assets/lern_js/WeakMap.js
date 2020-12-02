// 
let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = "1";

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {name: "John"};

let result1 = process(obj);
let result2 = process(obj);

// ...позже, когда объект больше не нужен:
obj = null;
console.log(cache.get(obj))

// 1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let weakSet = new WeakSet();
  
  const read = (message) => {
      weakSet.add(message);
  }
  //прочитано
  read(messages[0]);
  read(messages[1]);
  //удалено
  messages[0] = null; //or messages.shift(); console.log(weakSet.has({text: "Hello", from: "John"}))
  
  console.log(weakSet.has(messages[0])) //false

  // 2
  let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let weakMap = new WeakMap();
  
  const read = (message) => {
      let date = new Date();
      weakMap.set(message, date.getSeconds());
  }
  let readMessage = messages[0];
  //прочитано
  read(messages[0]);
  read(messages[1]);
  console.log(weakMap.has(readMessage)) //true
  //удалено
  messages.shift();
  console.log(messages[0])
  
  readMessage = null;
  
  console.log(weakMap.has(readMessage)) //false