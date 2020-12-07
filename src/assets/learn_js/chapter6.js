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

  //Декоратор + bind
  function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

function spy(func) {
	
  function callsCounter(...params) {
		callsCounter.calls.push(params);
    return func.apply(this, arguments)
  }
  callsCounter.calls = new Array();
  
  return callsCounter;
  
}

work = spy(work);


work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//2
function f(x) {
  alert(x);
}

function delay(func) {
	let count = arguments[1];
	function wrapper(params) {
	 //1 вариант  setTimeout(() => func.call(this, params), count);
   //2
	    setTimeout(() => func.apply(this, arguments), count);
      //3 Error setTimeout(func.apply(this, arguments), count); 
      //this=window
	  }
  
  return wrapper;
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

//3

function debounce(func, ms) {

  let permission = false;

  return function() {
    if (!permission){
      func.apply(this, arguments);

      permission = true;
      setTimeout(() => permission = false, ms);
      
    } else return;
  };
}



let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

//частичное применение
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
  