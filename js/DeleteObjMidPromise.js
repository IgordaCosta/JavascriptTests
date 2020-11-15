
// this file must be fixed for its giving errors

function DeleteObjMidPromise(DoneGet,ObjectToDelete){

    return new Promise((resolve, _reject) => {

    delete DoneGet.id 
    
    let arr1=[]
    let arr11=[]



    var p2 = new Promise(function(resolve, _reject) {

        if (ObjectToDelete.constructor.name == "Array"){

            resolve(1);

        }else{

            resolve(0);

        }
        
      });

      p2.then(function(value){
        console.log(value)

        console.log("is array!")

        let i;
        for (i = 0; i < ObjectToDelete.length; i++) {
       
            console.log(DoneGet)
    
            console.log("DoneGet['KEY_file15'] above")
            
            // let ThingTOget= DoneGet.datafillName
            
            let ThingTOget= DoneGet[ObjectToDelete[i]]
            
            if (ThingTOget==undefined){
            
                console.log("variable is undefined")
            }else{
            
                console.log("value Exists")
            
                console.log(ThingTOget)

                delete ThingTOget ;
            
                console.log('value gotten above deleted')
            
            }

        } 
        
        },function(reason){

            console.log(reason)

            console.log("is NOT array!")

            // console.log(DoneGet)
    
            console.log("DoneGet['KEY_file15'] above")
            
            // let ThingTOget= DoneGet.datafillName
            
            let ThingTOget= DoneGet[ObjectToDelete]
            
            if (ThingTOget==undefined){
            
                console.log("variable is undefined")
            }else{
            
                console.log("value Exists")
            
                console.log(ThingTOget)

                delete ThingTOget ;
            
                console.log('value gotten above deleted')

                


            }

            
    }

    

    ).then(function(value){

        console.log(value)

        console.log(DoneGet)

        console.log("Done DoneGet above")



    }, function(reason){

        console.log(reason)

    }

    
    )

}

    )

}


exports.DeleteObjMidPromise = DeleteObjMidPromise;