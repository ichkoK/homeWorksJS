const roomsOnFloor = 3; 
const floors = 9; 		

const roomNumber = 28;

let roomsOnPorch;
let porch, floor;

roomsOnPorch = roomsOnFloor * floors; 		

porch = Math.trunc(1 + (roomNumber - 1) / roomsOnPorch);
floor = Math.trunc(1 + ((roomNumber - 1) % roomsOnPorch) / roomsOnFloor);

console.log('Подъезд: ' + porch);
console.log('Этаж: ' + floor);