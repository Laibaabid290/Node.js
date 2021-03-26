// Classwork 2

const http=require('http');

var dt=require('./myfirstmodule')  //dt is the handler that we obtained it throught "require" keyword
                                   //so dt will be showing all of the publicly available methods in "myfirstmodule".

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World!\n") 
    res.write("Today is, "+ dt.GiveDate()+"\nName : "+dt.PrintMyName());
    res.end('\nkilling the response object here')
}).listen(8080, ()=>{
    dt.hello("Laiba")
    console.log("Server is running on port 8080")
});


//process.exit()