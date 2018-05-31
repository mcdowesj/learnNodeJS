function myFunction(){
    console.log(functionString);
}

var functionString = "This function was called ..."
var myString = "String";


exports.myFunction = myFunction;
exports.otherString = functionString;
exports.myString = myString;