const { EventEmitter } = require('events');
const EvenEmitter  = require('events');

const uuid = require('uuid');

// console.log(uuid.v4());

class logger extends EventEmitter{
    log(msg){
        // call event
        this.emit('message',{id:uuid.v4(),msg});

    }
}

module.exports = logger;