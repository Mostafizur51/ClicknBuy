const myEmitter=new myEmitter();
myEmitter.on('event',function(a,b){ 

    console.log(a,b,this==myEmitter);
});
myEmitter.emit('event','a','b');