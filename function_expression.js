function callFunction(fun) {
    fun();
}


var sayBye = function () {
    console.log("Say Bye");
}

callFunction(sayBye);