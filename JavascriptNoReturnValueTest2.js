// const res = new Promise(function* (resolve, reject) {
//     for (let i = 0; i < 15; i++) {
//         setTimeout(function() { console.log(i); }, 1000);
//       }
//       resolve('Done')
//   })
  
//   function onResolved(data) {
//     console.log('resolved');
//   }
  
//   function onRejected(err) {
//     console.log('err:');
//   }
  
//   res.then(onResolved, onRejected);


function* loopprint(){
    for (let i = 0; i < 15; i++) {
        setTimeout(function() { console.log(i); }, 1000);
        yield;
      };

};

function gen() {
    let z;
    for (let i = 0; i < 15; i++) {
        z = setTimeout(function() { console.log(i); }, 1000)
        console.log(z);
        if (z > 130){

            console.log('Done');

        } 
        
      };
      
      
  };

  gen()
// var it = gen();

// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
