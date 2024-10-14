const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

radius = 21;
const area21 = calculateArea({ radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius: radius, power: 2 });

export default calculateArea;
export { radius };
