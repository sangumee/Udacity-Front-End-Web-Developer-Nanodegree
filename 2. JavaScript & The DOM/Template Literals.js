// Old way to concatenate strings together with operator +.
const student = {
    name: 'si hyeong lee',
    guardian: 'sangumee'
};

const teacher = {
    name: 'Mrs.wilson',
    room: 'N231'
};

let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
console.log(message);

// Old method can make you complicated when you need to build multii-line strings.
let note = teacher.name + ',\n\n' +
    'Please excuse ' + student.name + '.\n' +
    'He is recovering from the flu.\n\n' +
    'Thank you,\n' +
    student.guardian;
console.log(note);

// New method to concatenate strings together.
let new_message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(new_message);

/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

const myName = 'Si Hyeong Lee';
const greeting = `Hello, my name is ${myName}`;
console.log(greeting);


// Use New method in Multiple line literals.
let note_multiple = `${teacher.name},

Please excuse ${student.name}.
He is recovering from the flu.

Thank you,
${student.guardian}`;

console.log(note_multiple);