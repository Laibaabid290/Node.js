function sayHello(name){
    console.log('Hello ' +name);
}

sayHello('Laiba')
















/*

const http=require('http');

var dt=require('./myfirstmodule')  //dt is the handler that we obtained it throught "require" keyword
//so dt will be showing all of the publicly available methods in myfirstmodule.

http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write("hello world!\nToday is, "+ dt.GiveDate()+"\nName : "+dt.PrintMyName());
// dt.hello("Laiba")
   res.end('\nkilling the response object here');
}).listen(8080, ()=>{
    console.log("Server is running on port 8080")
});




const http=require('http');
http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write("hello\n") 
   res.end('Hello World!');
}).listen(8080, ()=>{
    console.log("Server is running on port 8080")
});

function sayHello(name){
    console.log('Hello '+name);
}

sayHello('Laiba');
*/