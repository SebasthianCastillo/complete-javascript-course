subjects = {
  physics: ["jimmy", "kim", "mike"],
  programming: ["jimmy", "seba", "vale", "kim"],
  math: ["vale", "simo", "kim"],
  history: ["seba", "vale", "kim", "jimmy"],
};

student = {};

const getMembers = function (subject) {
  if (subjects[subject] !== undefined) {
    let students = subjects[subject];
    let teacher = subjects[subject].shift();
    return [teacher, students];
  } else {
    return subjects;
  }
};

const showInfo = function (subject) {
  let info = getMembers(subject);
  return `profesor : ${info[0]} - alumnos: ${info[1]}`;
};

const cantInSubject = function (student) {
  let information = getMembers();
  let cant = 0;

  for (info in information) {
    information[info].shift();
    if (information[info].includes(student)) {
      cant++;
    }
  }
  return cant;
};

console.log(showInfo("history"));
console.log(cantInSubject("vale"));
