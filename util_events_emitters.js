var util = require('util');
var events = require('events');


var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);


var umer = new Person('Umer');
var nabeel = new Person('Naveel');
var ahmed = new Person('Ahmad');

var people = [umer, nabeel, ahmed];
people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + " is speaking this msg:" + msg);
    });
});


people.forEach(function (person) {
    console.log(person.name);
});
// umer.emit('speak', "helloo joni bholla ha");

// var mitho = new Person("Mitho");
// console.log(mitho.name);