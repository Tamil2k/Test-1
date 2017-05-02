# Test

This is a robot application simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.

To run the app, you'll need:

Node.js  (https://nodejs.org/en/download/),      
npm [npm](https://www.npmjs.com/),                          
For testing mocha chai framework is used                        
To install chai.     
npm install chai                       
commands should be used.                       


Start the application by issuing npm start you will be prompted with input 

PLACE X,Y,DIR | MOVE | LEFT | RIGHT | REPORT | EXIT:

PLACE 2,2,SOUTH             
MOVE                          
LEFT                            
RIGHT                             
REPORT                                          

other way of running this application is by providing input file and  command to execute the program using input file is npm start input.txt

All required npm modules  are included in the package.json. For testing the application please execute npm test which tests the basic functionality.

Application contains two class file Toy and OperateToy. 

Toy class file contains properties x,y,rows and columns as propertiesa and function such as move,right rotate,left rotate. 

OperateToy is a class through which user receives input and invokes toy class functions.Operate toy fucntions and variables are kept static to make sure only one toy object is created and accessed through OperateToy class.
