"use strict";
//function in typescript (part-1)//
Object.defineProperty(exports, "__esModule", { value: true });
//Example-1 ( Accepting only number data type )
function subTwo(num) {
    return num - 2;
}
subTwo(5);
//Example-2 ( Accepting only string data type )
function getLower(val) {
    return val.toLowerCase();
}
getLower("SARVESH");
//Example-3 ( Accepting only string and boolean data type )
function signUpUser(name, email, password, isPaid) { }
signUpUser("s", "s@yesd.com", "forgot", false);
//Example-4 ( Accepting only two given parameters )
function logIn(name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
logIn("s", "remind");
//function in typescript (part-2)//
//Example-1 string-> Mentiond what data type should return this function
var greet = function (name) {
    return "Hello " + name;
};
greet("sarvesh");
//Example-2 string-> Mentiond what data type should return this map function
var villans = ["saniyan sakkada", "pattasu balu", "muthu pandi"];
villans.map(function (villan) {
    return "my villan ".concat(villan);
});
//Example-3 void-> Mentiond what data type should return this function
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("void");
//Example-4 never-> Mentiond what data type should return this function
function handleError(errmsg) {
    throw new Error(errmsg);
}
handleError("error");
