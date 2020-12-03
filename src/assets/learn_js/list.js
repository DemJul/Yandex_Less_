
const sumTo1 = (n) => { 
	let sum = 0;
	for (let i = 1; i <= n; i++) {
  	sum += i;
  }
  return sum;
}

const sumTo2 = (n) => {
	if (n <= 1) return 1;
  else {
  	return n + sumTo2(n-1);
  }
}

const sumTo3 = (n) => {
	return (2 + n-1)*n/2
}

console.log( sumTo1(100) ); // 5050
console.log( sumTo2(100) ); // 5050
console.log( sumTo3(100) ); // 5050

//3
const factorial = (n) => {
	if (n == 1) return n;
  else {
  	return n * factorial(n-1)
  }
}

console.log( factorial(4) ); // 

const fib = (n) => {
	if (n === 1 || n === 2) return 1;
  else {
  	return fib(n-1) + fib(n-2);
  }
}

alert(fib(3)); // 2
//5
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
	console.log(list?.value);
  
	if (list.next) {
    printList(list.next);
  }
}

function printList2(list) {
	console.log(list?.value);
  let next = list.next;
  while(next) {
  	console.log(next?.value);
    next = next.next;
  }
}

printList(list)
printList2(list)