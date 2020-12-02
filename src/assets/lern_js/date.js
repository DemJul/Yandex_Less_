//
let date = new Date(0, 0, 0); //1899
let date = new Date(2012, 0, 0);// 31 dec 2011
let date = new Date(2012, 1, 0); // 31 января 
let date = new Date(2012, 1, 1); // 1 февраля


//1
alert(new Date(2012, 1, 20, 3, 12))

//2
let date = new Date(2012, 0, 3);  // 3 января 2012 года
      // нужно вывести "ВТ"
const getWeekDay = (date) => {
	let arrDays = ['ВС','ПН', 'Вт','СР', 'ЧТ','ПТ', 'СБ']
	return arrDays[date.getDay()];
}
alert( getWeekDay(date) );  

//4
let date = new Date( 2015, 0, 2);

const getDateAgo = (date, days) => {
	let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// 6
const getSecondsToTomorrow = () => {
	let date = new Date();
  let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  return Math.round((tomorrow - date)/1000);
  
}

alert(getSecondsToTomorrow())

