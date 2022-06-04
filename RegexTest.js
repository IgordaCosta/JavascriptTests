


let item = "1357%$2&*&551" ; 

// let item = '123413'  + 'A&B*$C'  + '23452'



// const searchRealcomma1 =   '%[$]2&[*]&'                 //'A&B[*][$]C'

const searchRealcomma1 =   '[%][$]2[&][*][&]'       
const searchRealcomma1Exp1 = new RegExp(searchRealcomma1, 'g'); 
const realCommaReplace = 'OK' ;



let names00 = item.replace(searchRealcomma1Exp1, realCommaReplace)

console.log(names00);