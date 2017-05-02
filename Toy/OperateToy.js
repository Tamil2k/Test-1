//Global variables
var readline = require('readline');
var log = console.log;
var objToy = require('./Toy.js');
var args = process.argv.slice(2);
var fs = require('fs');

var rl = readline.createInterface({
  input: process.
  stdin,
  output: process.stdout
});

//class to contain methods to parse user input and perform operations on the toy accordingly
 class OperateToy{

    //default constructor
    constructor(){
        OperateToy.toy = new objToy();
    }

    //method to check if toy has been positioned/placed in the beginning
    static notEmptyToy()
    {
        if(this.toy.x != null && this.toy.y!= null && this.toy.position!= null)
                    return true;
        else return false;
    }

    //method to accept file input for commands
    static readFileInput(){
        var rd = readline.createInterface({
            input: fs.createReadStream("./"+process.argv[2]),
            output: process.stdout,
            console: false
        });

        rd.on('line', function(line) {
            line = line.trim();
            OperateToy.inputCase(line);
        });

        rl.on('close', function() {
            console.log('Commands completed');
        });
    }

    //method to perform operations according to input command
    static inputCase(answer){
        if(process.argv.length == 3)
        console.log('PLACE X,Y,DIR | MOVE| LEFT| RIGHT| REPORT| EXIT:');

        //if PLACE command is input
        if (answer.startsWith("PLACE"))
        {
            answer=answer.replace("PLACE","");   
            if(answer.split(',') <= 2){
                console.log('Incorrect command. Correct commands are: PLACE X, Y, F | MOVE | LEFT | RIGHT | REPORT |EXIT');
                if(process.argv.length == 2)
                OperateToy.asyncReadLine(); 
            }

            if(OperateToy.toy.validate(answer.split(',')[0],answer.split(',')[1],answer.split(',')[2]))
                 OperateToy.toy.setRowsnColunns(parseInt(answer.split(',')[0]),parseInt(answer.split(',')[1]),answer.split(',')[2]);
        }
        //if MOVE command is input
        else if (answer ==="MOVE") {
            if(OperateToy.notEmptyToy())
                 OperateToy.toy.move();
            else
                console.log('First place the robot by issuing PLACE X, Y, F ');
        }
        //if LEFT command is input
        else if (answer === "LEFT"){
            if(OperateToy.notEmptyToy())
                 OperateToy.toy.Left();
            else
                console.log('First place the robot by issuing PLACE X, Y, F ');
        }
        //if RIGHT command is input
        else if (answer ==="RIGHT") {
            if(OperateToy.notEmptyToy())
                 OperateToy.toy.Right();
            else
                console.log('First place the robot by issuing PLACE X, Y, F ');
        }
        //if REPORT command is input
        else if (answer === "REPORT"){
            if(OperateToy.notEmptyToy())
                 OperateToy.toy.Report(); 
            else
                console.log('First place the robot by issuing PLACE X, Y, F ');     
        }
        //if EXIT command is input
        else if (answer == 'EXIT')
                return rl.close();
        //if incorrect commands are input
        else
            console.log('Incorrect command. Correct commands are: PLACE X, Y, F | MOVE | LEFT | RIGHT | REPORT |EXIT');
            if(process.argv.length == 2){
               OperateToy.asyncReadLine();
            }              
    }   
    static asyncReadLine() {
        rl.question('PLACE X,Y,DIR | MOVE | LEFT | RIGHT | REPORT | EXIT:', function (answer) {
                OperateToy.inputCase(answer);
        });
    };
}
module.exports = OperateToy;
if(process.argv.length == 2)
{
    var opToy = new OperateToy();
     OperateToy.asyncReadLine(); 
}
if(process.argv.length == 3)
{
    console.log('PLACE X,Y,DIR | MOVE | LEFT | RIGHT | REPORT | EXIT:');
    var opToy = new OperateToy();
    OperateToy.readFileInput();
}