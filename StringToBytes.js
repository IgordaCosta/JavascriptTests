
// var myBuffer = []; 
// var str = 'Stack Overflowçç'; 
// var buffer = new Buffer(str, 'utf16le'); 

// for (var i = 0; i < buffer.length; i++) { 
    
//     myBuffer.push(buffer[i]); 

// } 

// console.log(myBuffer);


// const byteArray = [65, 66, 67, 68, 69, 70] 

// const bytesString = String.fromCharCode(...byteArray) 

// console.log('Bytes to string: ', bytesString)




function stringToUint(string) { 
    
    var string = btoa(unescape(encodeURIComponent(string)));
    charList = string.split('');
    uintArray = []; 
    
    for (var i = 0; i < charList.length; i++) { 
        
        uintArray.push(charList[i].charCodeAt(0)); 
    
    } return new Uint8Array(uintArray); 

} 

function uintToString(uintArray) { 
    
    var encodedString = String.fromCharCode.apply(null, uintArray);
    
    let decodedString = decodeURIComponent(escape(atob(encodedString))); 
    
    return decodedString; 

}

let string = 'çççTest'

// console.log(stringToUint(string));

let uintArray = [
    119,  54, 102, 68, 112,  56,
     79, 110,  86, 71,  86, 122,
    100,  65,  61, 61
  ]


  console.log(uintToString(uintArray))