exports.GiveDate=()=>{
    return Date();
}

exports.PrintMyName=()=>{
    return "Laiba"
}

exports.hello=function(fullname){
   return console.log("Hi "+ fullname+"\nThe time is "+ new Date().getHours()+" Hours and "+ new Date().getMinutes() + " minutes!");
}