'use strict';

//class to perform operations directly linked to the toy
class Toy{

    //constructor to initialize the table surface using rows and columns and the toy
    constructor(){
        var x = null;
        var y = null;
        var position = null;
        //application uses square board of 5x5 units
        Toy.rows = 4;
        Toy.columns = 4;
    }

    //method to set position of the toy
    setRowsnColunns(X,Y,Position) {
        this.x = X;
        this.y = Y;
        this.position = Position;
    };
    //method to retrieve position of toy
    getPosition() {
        if(this.position != null)
        return this.position;
    };
    //method to move toy according to user command
    move(){
        switch(this.position){
            case 'NORTH':
                //if north, move up along y-axis by one position
                if(this.y<Toy.columns)
                    this.y = ++this.y;
                else
                    console.log('\t\t\t\t\t\t\tNORTH REACHED TERMINATION POINT');
                break;
            case 'SOUTH':
                //if south, move down along y-axis by one position
                if(this.y>0)
                    this.y = --this.y;
                else
                    console.log('\t\t\t\t\t\t\tSOUTH REACHED TERMINATION POINT');
                break;
            case 'EAST':
                //if east, move forward along x-axis by one position
                if(this.x<Toy.rows)
                    this.x = ++this.x;
                else
                    console.log('\t\t\t\t\t\t\tEAST REACHED TERMINATION POINT');
                break;
            case 'WEST':
                //if west, move backward along x-axis by one position
                if(this.x>0)
                    this.x = --this.x;
                else
                    console.log('\t\t\t\t\t\t\tWEST REACHED TERMINATION POINT');
                break;
        }
    };
    //method to return position of the toy currently on REPORT command
    Report(){
        console.log("\t\t\t\t\t\t\tthis.x\t\t->\t"+ this.x);
        console.log("\t\t\t\t\t\t\tthis.y\t\t->\t"+ this.y);
        console.log("\t\t\t\t\t\t\tPosition\t->\t"+ this.position);    
    };
    //rotate toy accordingly when LEFT command
    Left(){
        switch(this.position){
            case 'NORTH':
                this.position = 'WEST';
                break;
            case 'EAST':
                this.position = 'NORTH';
                break;
            case 'SOUTH':
                this.position = 'EAST';
                break;
            case 'WEST':
                this.position = 'SOUTH';
                break;
        }
    };
    //rotate toy accordingly when LEFT command
    Right(){
        switch(this.position){
            case 'NORTH':
                this.position = 'EAST';
                break;
            case 'EAST':
                this.position = 'SOUTH';
                break;
            case 'SOUTH':
                this.position = 'WEST';
                break;
            case 'WEST':
                this.position = 'NORTH';
                break;
        }    
    };
    //method to validate if the position of the toy is right
    validate(x,y,position){
        //error when x, y coordinates are not given numeric values
        if ((isNaN(x) == true) || (isNaN(y) == true)) 
        {
            console.log("Error! You must enter a number into the X and Y fields!");
            return false;
        }
        //if x, y coordinates given are out of the table surface
        if ( x < 0 && x !=0 ||  x > Toy.rows || y != 0 && y < 0 || y > Toy.columns )
        {
            console.log("WRONG INPUT FOR X,Y CO-ORDINATES");
            return false;
        }
        //if wrong direction is given
        else if (!(position === 'NORTH' || position === 'WEST' || position === 'EAST' || position === 'SOUTH'))
        {
            console.log("WRONG INPUT FOR POSITION "+ position);
            return false;
        }
        else 
        {
            return true;
        }
    }
}
module.exports = Toy;