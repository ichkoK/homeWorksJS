// _________ Task 1

	console.log('Task 1');

	let arr = [];
	const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия'
	};

	for (const [key, value] of Object.entries(citiesAndCountries)) {
		arr.push(key + ' - это ' + value);
	}

	console.log(arr);

// _________ Intro

	console.log('Task 2. Do "getArray(9 or another num)", pls');
	console.log('Task 3. Do "getNameOfDay("en" or "ru", dayOfWeek"1..7")". P.S. getNameOfDay words do write in single quotes!!!');
	console.log('Task 4. Do "sumFunction()", pls');
	console.log('Task 4. Do "lastFunction()", pls');

// _________ Task 2

function getArray(amount){
	let arr = [];

	if(amount%3 === 0 && amount > 0) {
		for(let i=0, j=0; i<(amount/3); i++, j+=3) {
			let	subArr = [1, 2, 3];
			subArr = subArr.map(el => el + j);
			arr.push(subArr);
		}
		return arr;
	} else 
	return 'Choose another amount number';
}

// _________ Task 3

function getNameOfDay(lang, dayOfWeek){
	const namesOfDays = {
	    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	}

	if(lang == 'ru' || lang == 'en') {
		if (dayOfWeek>0 && dayOfWeek<8 && Number.isInteger(dayOfWeek)) {
			return Object.values(namesOfDays[lang])[dayOfWeek - 1];
		} else return 'Enter a number from 1 to 7';
	} else return 'Choose your language: ru or en';
}

// _________ Task 4

function sumFunction() {
	let arr = [10, 800, 3453000, 8010],
		sum = 0;

	for(let key in arr) {
		if (arr[key]<0 || !Number.isInteger(arr[key])) {
			return 'none'; // -- Stop function :)
		}
	}
	arr.sort(function(a, b) {
		return a - b;
	});

	for(let i = 0; i<2; i++){
    	sum += arr[i];
    };
    return sum;
	
}

// _________ Task 5

function lastFunction() {
	let arr = [1, 0, 1, 1],
		num;
	for(let key in arr) {
		if (arr[key] != 0 && arr[key] != 1) {
			return 'Type another array, pls. Use only 1 and 0 elements'
		}
	}
	num = parseInt(Number(arr.join('')), 10);

	return parseInt(num, 2);
}