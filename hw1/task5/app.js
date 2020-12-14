const medianNumber = 9;

if (medianNumber <= 0 || !Number.isInteger(medianNumber)) {
	console.log('Error. Do write another number')
} else {
	const lineWidth = medianNumber * 2 - 1;
	for (let i = 1; i <= medianNumber; i++) {
		let line = '';
		for (let j = 1; j <= lineWidth; j++) {
			if (j > medianNumber - i && j < medianNumber + i) {
				line += '#';
			} else line += '-';
		}
		console.log(line + '  //' + i)
	}
}