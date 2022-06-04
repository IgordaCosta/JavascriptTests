


// function CallbackTested(){

//     console.log('callback now excecuted')


// };



// function TestCallBack(_callback){


//     setTimeout(console.log('time printed'), 10000)

//     _callback();

// };







// TestCallBack(CallbackTested());







function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete

    setTimeout(function() { console.log('first time printed'); }, 10000);
    _callback();    
}

function secondFunction(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
        console.log('huzzah, I\'m done!');
    });    
}


secondFunction()