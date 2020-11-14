

async function DeleteObjFromTable(ObjectToDelete){

    var process = require("process");

    var path = require("path");

    const currentWorkingDirectory = process.cwd();


    const { getDbDataSimple } = require(path.join(currentWorkingDirectory, "./js/getDbDataSimple"));

    const { insertIntoDatabase } = require(path.join(currentWorkingDirectory, "./js/insertIntoDatabase"));

    const { MyDocumentsDatabasePath } = require(path.join(currentWorkingDirectory, "./js/MyDocumentsDatabasePath"));

    const { DeleteObjMidPromise } = require(path.join(currentWorkingDirectory, "./js/DeleteObjMidPromise"));

    

    let MyDocumentsDbPath = await MyDocumentsDatabasePath(currentWorkingDirectory)

    


    let AwaitProveData="ok"
    
    let TableName=''
    
    let Database=''
    
    
    let DoneGet=await getDbDataSimple(AwaitProveData,TableName,Database)

    
    // delete DoneGet.id 
    


    // let arr1=[]
    // let arr11=[]

    // if (ObjectToDelete.constructor.name == "Array"){

    //     console.log("is array!")

    //     let i;
    //     for (i = 0; i < ObjectToDelete.length; i++) {
       
    //         console.log(DoneGet)
    
    //         console.log("DoneGet['KEY_file15'] above")
            
    //         // let ThingTOget= DoneGet.datafillName
            
    //         let ThingTOget= DoneGet[ObjectToDelete[i]]
            
    //         if (ThingTOget==undefined){
            
    //             console.log("variable is undefined")
    //         }else{
            
    //             console.log("value Exists")
            
    //             console.log(ThingTOget)

    //             delete ThingTOget ;
            
    //             console.log('value gotten above deleted')
            
    //         }

    //     } 

    //     }else{

    //         console.log("is NOT array!")

    //         console.log(DoneGet)
    
    //         console.log("DoneGet['KEY_file15'] above")
            
    //         // let ThingTOget= DoneGet.datafillName
            
    //         let ThingTOget= DoneGet[ObjectToDelete]
            
    //         if (ThingTOget==undefined){
            
    //             console.log("variable is undefined")
    //         }else{
            
    //             console.log("value Exists")
            
    //             console.log(ThingTOget)

    //             delete ThingTOget ;
            
    //             console.log('value gotten above deleted')


    //         }
    // }


    DoneGet2 = await DeleteObjMidPromise(DoneGet, ObjectToDelete)

    dataName=Object.keys(DoneGet2)
    
    data= Object.values(DoneGet2)


    console.log(data)
    

    console.log('data after if above')
    

    console.log(dataName)

    console.log('dataName after if above')

    
    Done= await insertIntoDatabase(data, dataName, MyDocumentsDbPath,currentWorkingDirectory,TableName,Database)

    console.log(Done)
    

    console.log('Done above')

    return Done


    
    
}



ObjectToDelete='finalLocationsX'

Done=DeleteObjFromTable(ObjectToDelete)

console.log(Done)