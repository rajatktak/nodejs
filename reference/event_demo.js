const EventEmitter=require('events');

// create class
class MyEmitter extends EventEmitter{

}

const myEmitter= new MyEmitter();

// event listner
myEmitter.on('event',function(){console.log('event fired')});


myEmitter.on('event2',function(){console.log('event 2  fired')});


myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event2');
