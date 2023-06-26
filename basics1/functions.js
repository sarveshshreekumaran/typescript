"use strict";
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
