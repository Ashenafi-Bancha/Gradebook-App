//function which calculates the students averagee based on their total scores and the number of subjects which they learn.
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
// code to print(log)  the average  score of student to the console.
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// grade calculating function
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// function to check whether the stundent has pass grade or not.

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
//funcion calling to check the correct functionality of hasPassingGrage function.
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

//function to message the student thier average, grade and whether he /she has passed of failed.
function studentMsg(totalScores, studentScore) {

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
