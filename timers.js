let loopArray = [1,2,3,4,5];
var startTime = Date.now();
var WAIT_TIME=2000;
function customWait(n, callback){
    let currentTime = Date.now();
    while(startTime + n*WAIT_TIME > currentTime ){
        currentTime = Date.now();
    }
    callback(n);
}

loopArray.forEach(n => {
    customWait(n, function(n){
        console.log(n);
    });
});

