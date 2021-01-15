// condidateArr = {}

// ----- Task 1 ------

const arr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (nameArr, index) => {
	return nameArr.splice(index, 1);
};

removeUser(arr, 1);
console.log(arr);

// ----- Task 2 ------

const obj = { name: 'Vasya', age: 1};

const getAllKeys = (objName) => {
	return Object.keys(objName);
};

console.log(getAllKeys(obj));

// ----- Task 3 ------

const getAllValues = (objName) => {
	return Object.values(objName);
};

console.log(getAllValues(obj));

// ----- Task 4 ------

const firstObj = {
    id: 3,
    name: 'Vasya'
};

const secondObj = {
    id: 4,
    name: 'Katya'
};

const newArr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoArr = (obj, id) => {
	newArrIndex = newArr.findIndex((obj) => obj.id === id);
	newArr.splice(newArrIndex, 0, obj);
};

insertIntoArr(firstObj, 2);
console.log(newArr);

insertIntoArr(secondObj, 1);
console.log(newArr);

// ----- Task 5 ------

class Condidate {
	constructor(condidate) {
		Object.assign(this, condidate);
	};

	get state (){
		const address = this.address.split(",");
		return address[2];
    }
};

const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state);

// ----- Task 6 ------

const getCompanyNames = () => {
	let companyArr = condidateArr.map(obj => obj.company);
	uniqueArray = companyArr.filter(function(a, b) {
    	return companyArr.indexOf(a) == b;
	})
	return uniqueArray;
}

console.log(getCompanyNames());

// ----- Task 7 ------

const getUsersByYear = (year) => {
  return condidateArr
  	.filter((condidate) => condidate.registered.substr(0, 4) == year)
  	.map((condidate) => (condidate = condidate._id));
};

console.log(getUsersByYear(2017));

// ----- Task 8 ------

const getCondidatesByUnreadMsg = (msgNum) => {
    return condidateArr.filter(obj => obj.greeting.match(/\d+/g) == msgNum);
 }

console.log(getCondidatesByUnreadMsg(8)) 

// ----- Task 9 ------

const getCondidatesByGender = (gender) => {
    return condidateArr.filter(obj => obj.gender == gender);
 }

console.log(getCondidatesByGender('male')); 