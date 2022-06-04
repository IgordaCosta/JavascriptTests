



const getDbData = function (resultDatabase,TableName,Database,CurrentWorkingPath,MydocumentsDbPath) {

    if(TableName==''){
        TableName="qqqqqqqrrrrrrSetValuesrrrrrrqqqqqqq"
    }else{}

    if(Database==''){
        Database='./AutoFormFiller.db'
    }else{}

    // resultDatabase is any result data from an earlier function to turn this function into an async function

    return new Promise((resolve,reject) =>{

    var process = require('process');
    process.chdir(MydocumentsDbPath);



    // console.log(resultDatabase)

    // console.log("this is the resultDatabase above")

    
    



    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database(Database);

    let sql = `SELECT * FROM ${TableName}`;


    // first row only
    // db.get(sql, [TableName], (err, row) => {
    
    try{

        db.get(sql, (err, row) => {
            if (err) {

                process.chdir(CurrentWorkingPath);

                reject(err)
                // return console.error(err.message);

                // console.log(err)
    
            }else{
    
    
            // console.log(row)
            // console.log("row is above")
    
            // dados=JSON.stringify(row);
    
            // console.log(dados)
            // console.log("dados is above")


            
            process.chdir(CurrentWorkingPath);
            // CurrentWorkingPath
    
            // callback(row);

            // console.log(row)

            // console.log("above is the row within the function")
    
            resolve(row);
            
    
    
            }
            
    
            
    
            
            // ? console.log(row)
            // : console.log(`No table found with the tablename: ${TableName}`);
        });



        
    }catch(e){

        // console.log(e)

        // reject(e)


    }
    

    // close the database connection
    db.close();

    
    // return dados;


    }

    )

    


    // "SELECT * FROM "+ TableName
}
exports.getDbData = getDbData;




// module.exports = getDbData;



