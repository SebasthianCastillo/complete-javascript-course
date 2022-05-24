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
  let clases = `${student} is in: `;

  for (info in information) {
    information[info].shift();
    if (information[info].includes(student)) {
      cant++;
      clases += `${info} teacher: ${getMembers(info)[0]}  `;
    }
  }
  return cant, clases;
};

console.log(cantInSubject("vale"));
