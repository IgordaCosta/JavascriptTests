const res = new Promise(function (resolve, reject) {
    for (let i = 0; i < 15; i++) {
        setTimeout(function() { console.log(i); }, 1000);
      } 
      resolve('Done')
  })
  
  function onResolved(data) {
    console.log('resolved');
  }
  
  function onRejected(err) {
    console.log('err:');
  }
  
  res.then(onResolved, onRejected);