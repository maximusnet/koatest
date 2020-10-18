function logCar(logMsg, callback){
    process.nextTick(function() {
        callback(logMsg);
    });
}

const cars = ["Ferrari", "Porsche", "Bugatti"];
let message = "";
for (const idx of cars){
    message = "Saw a " + cars[idx];
    logCar(message, ()=>console.log("Normal Callback: " + message));
}


for (const idx of cars){
     message = "Saw a " + cars[idx];
    ((msg)=>{
        logCar(msg, ()=> console.log("Closure Callback: " + msg));
    })(message);
}
