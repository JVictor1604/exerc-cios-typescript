"use strict";
// Exercício 1, criação da interface User
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
;
exports.users = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
// final do exercício 1
