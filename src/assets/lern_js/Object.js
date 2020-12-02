// 1
function unique(arr) {
    let set = new Set(arr);
    let newArr = [];
    // Лучше Array.from(new Set(arr));
    set.forEach((value) => newArr.push(value));  
    
    return newArr;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );

  // 2
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  let aclean = (arr) => {
    let newObj = new Map();
    for (let item of arr) {
      let base = item.toLowerCase().split('').sort().join('');
      newObj.set(base, item);
      
    }
    return Array.from(newObj.values());
  }
  
  alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

  // 3
  let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys)