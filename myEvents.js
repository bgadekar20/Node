var events = require("events");
var eventEmitter = new events.EventEmitter();



eventEmitter.on("myEvent", function(var1, var2){
console.log("Emitted my Event");

});

eventEmitter.emit("myEvent", 2,3);