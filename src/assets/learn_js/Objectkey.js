// 
let user = {
    name: "John",
    age: 30
  };
  
  //for in нельзя, так как Object.values - вернет массив, и for in будет выводить его свойства - индексы
  for (let value of Object.values(user)) {
    alert(value); // John, затем 30
  }
  
  console.log(Object.values(user))

//   1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  const sumSalaries = (salaries) => {
      let sum = 0;
      for (let value of Object.values(salaries)) sum+= value;
      return sum;
  }
  
  alert( sumSalaries(salaries) ); // 650

//   2
let user = {
    name: 'John',
    age: 30
  };
  
  const count = (obj) => {
      return Object.keys(obj).length;
  }


  alert( count(user) ); // 2