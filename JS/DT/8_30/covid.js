// [ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]
]

// 1. district having Highest +ve case - 
let fir = covid_data.reduce((a, b) => a[2] > b[2] ? a : b)
console.log("District having Highest +ve Case = " + fir[1]);

// 1. district having Highest +ve case - 
let sec = covid_data.reduce((a, b) => a[5] > b[5] ? a : b)
console.log("District having Highest 1st dose Vaccine = " + sec[1]);

//3. district having lowest death rate -
let third = covid_data.reduce((a, b) => a[3] < b[3] ? a : b)
console.log("District having Lowest Death Rate = " + third[1]);

//4. sort data with +ve case in descending order -
let four = covid_data.sort((a, b) => b[2] - a[2])
console.log("Descending Order");
console.log(four);

//5. is district with +ve cases > 15000 -
let five = covid_data.some(a => a[2] > 1500)
//6. sort data with 1st dose vaccine -

//7. Print Thrissur details -

console.log("Thrissur details = \n" + covid_data[2]);

