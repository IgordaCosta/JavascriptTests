


async function getDbDataSimpleShow(){

    var process = require("process");

    var path = require("path");

    const currentWorkingDirectory = process.cwd();


    const { getDbDataSimple } = require(path.join(currentWorkingDirectory, "./js/getDbDataSimple"));


    let AwaitProveData="ok"
    
    let TableName=''
    
    let Database=''
    
    
    let tableGotten=await getDbDataSimple(AwaitProveData,TableName,Database)
    
    console.log(tableGotten)
    
    console.log("tableGotten['KEY_file15'] above")
    
    // let ThingTOget= tableGotten.datafillName
    
    let ThingTOget= tableGotten.asdfads
    
    if (ThingTOget==undefined){
    
        console.log("variable is undefined")
    }else{
    
        console.log("value Exists")
    
        console.log(ThingTOget)
    
        console.log('value gotten above')
    
    }
    
    
    }
    
    getDbDataSimpleShow()