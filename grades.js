/*
50-60 = F
61-70 = D
71-80 = C
81-90 = B
91-100 = A

1-How many of each grade; 2-Lowest grade?; 3-Highest grade?
*/ 

let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let gradeA = [];
let gradeB = [];
let gradeC = [];
let gradeD = [];
let gradeF = [];

// let grades = [];

for (score of scores) {
    if (score >= 50 && score <= 60) {
       gradeF.push(score);
    } else if (score >= 61 && score <= 70) {
        gradeD.push(score);
    } else if (score >= 71 && score <= 80) {
        gradeC.push(score);
    } else if (score >= 81 && score <= 90) {
        gradeB.push(score);
    } else if (score >= 91 && score <= 100) {
        gradeA.push(score);
    }
}
// grades.push(gradeA, gradeB, gradeC, gradeD, gradeF);
// console.log(grades);
console.log(`There are ${gradeA.length} "A"s, ${gradeB.length} "B"s, ${gradeC.length} "C"s, ${gradeD.length} "D"s, and ${gradeF.length} "F"s.`);

console.log(`The lowest grade is a ${Math.min(...scores)}.`);
console.log(`The highest grade is a ${Math.max(...scores)}.`);