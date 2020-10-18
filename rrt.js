
let promise = new Promise((resolve, reject)=>{
    console.log(`promise start`);
    setTimeout(()=>{console.log(`settimeout funstion`); resolve("Complete");},5000);


});

promise.then((result)=>console.log(result));
