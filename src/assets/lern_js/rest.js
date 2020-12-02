//1

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  let salaries2 = {
    "John": 100,
    "Pete": 300,
    "Mary": 300
  };
  
  let salaries3 = {
  };
  
  const topSalary = (salaries) => {
      let max = -1;
    let superPerson = null;
      for (let [key, value] of Object.entries(salaries)) {
        if(max < value) {
          superPerson = key;
        max = value;
      }
    }
    return superPerson;
  }
  console.log(topSalary(salaries))
  console.log(topSalary(salaries2))
  console.log(topSalary(salaries3))