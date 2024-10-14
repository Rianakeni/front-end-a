import yearUntilRetirement from "./yearUntilRetirement";
import addNumber from "./addNumber";
import calculateArea from "./calculateArea";
import { radius } from "./calculateArea";
import makeAjaxRequest from "./makeAjaxRequest";

//1
console.log(yearUntilRetirement({ year: 1987, firstName: "John" }));
//2
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
//3
radius = 21;
const area21 = calculateArea({ radius: radius });
radius = 7;
const area7 = calculateArea({ radius: radius });
console.log(`area with 21 radius: ${area21} and area with 7 radius: ${area7}`);
//4
console.log(makeAjaxRequest("www.google.com"));
