function say() {
    count = 2;
  }
  
  say();
  console.log(count)
  
  let name = "John";
  
  function sayHi() {
    alert("Hi, " + name);
  }
  sayHi()//John
  name = "Pete"; // (*)
  sayHi()//Pete 
  
  
  //1
  
  function sum(a) {
      return function sum1(b) {
        return a+b;
    }
  }
  
  console.log(sum(2)(1))
  
  //2
  let arr = [1, 2, 3, 4, 5, 6, 7];
  
  function inArray(arr) {
      return function(item) {
        return arr.includes(item)
    }
  }
  
  console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
  
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(key) {
      return function (a, b) {
        return a[key] > b[key] ? 1 : -1;
    }
  }
  
  users.sort(byField('name'));
  users.sort(byField('age'));
  console.log(users)
  
  //3
  function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let num = i;
      let shooter = function() { // функция shooter
        alert( num ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
  
  
  //---Контекстное название функции
  const sayMe = function (){ console.log(1)};
  console.log(sayMe.name);
  
  const sayYou = sayMe;
  console.log(sayYou.name)
  
  //Свойства функции
  function makeCounter() {
      let count = 0;
    
    
    
    return function fun() {
    
        count++;
      fun.set = value => count = value;
      fun.decrease = () => count--;
      console.log(count);
    }
  }
  
  let counter = makeCounter();
  counter();
  counter.set(-17);
  counter.decrease();
  counter();
  