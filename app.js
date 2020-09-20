var events = require('events')

// var eventEmitter = new events.EventEmitter();


// eventEmitter.on('clicked', function(button) {
//     console.log(button+' is clicked')
// })

// eventEmitter.emit('clicked', 'button 1')


var util = require('util')

var eventEmitter = new events.EventEmitter()
var Students = function(name) {
    this.name = name
}
util.inherits(Students, events.EventEmitter)

var max = new Students('max')

max.on('scored', function(marks) {
    console.log(max.name + ' scores ' +marks + ' marks')
})

max.emit('scored', 95)