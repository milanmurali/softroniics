//Find the area and diameter of the circle using the function and convert it into a higher-order function

function area(radius){
    return Math.PI * radius * radius;
}
function dia(radius){
    return 2 * radius;
}

let radius =5
console.log(area(radius));
console.log(dia(radius));
