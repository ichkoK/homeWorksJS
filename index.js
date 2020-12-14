// --- 1st / 2nd task ---

const i = 3; // Element number

class Emploee {
	constructor(obj) {
		for (let key in obj) {
			this[key] = obj[key];
		}
	}
}

Emploee.prototype.getFullName = function() {
	return this.surname + ' ' + this.name;
};

const employeeObj = new Emploee(emplyeeArr[i]);

// --- 3th task ---

let createEmployesFromArr = (arr) => {
	const createdArr = [];
	for (let key in arr) {
		createdArr.push(new Emploee(emplyeeArr[key]));
	}
	return createdArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

// --- 4th task ---

const getFullNamesFromArr = (arr) => {

	let fullNameArr = [];

	for (const key of arr) {
		fullNameArr[fullNameArr.length] = key.getFullName();
	}

	return fullNameArr;
};

// --- 5th task ---

const getMiddleSalary = (arr) => {
	let sum = 0;

	for (const key in arr) {
		sum = sum + arr[key].salary;
	}

	let middleSalary = Math.trunc((sum / arr.length));

	return middleSalary;
};

// ---6th task ---

const getRandomEmployee = (arr) => {
	const randomNum = Math.floor(Math.random() * arr.length);

	return arr[randomNum];
};


console.log(employeeObj); //1
console.log(employeeObj.getFullName()); //2
console.log(emplyeeConstructArr); //3
console.log(getFullNamesFromArr(emplyeeConstructArr)); //4
console.log(getMiddleSalary(emplyeeConstructArr)); //5 (Средняя зарплата равна 2388, а не 1560, как в задании)
console.log(getRandomEmployee(emplyeeConstructArr)); //6