//Example-1 ( Accepting only number data type )
function subTwo(num: number) {
  return num - 2;
}

subTwo(5);

//Example-2 ( Accepting only string data type )
function getLower(val: string) {
  return val.toLowerCase();
}

getLower("SARVESH");

//Example-3 ( Accepting only string and boolean data type )
function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

signUpUser("s", "s@yesd.com", "forgot", false);

//Example-4 ( Accepting only two given parameters )
function logIn(name: string, password: string, isPaid: boolean = false) {}

logIn("s", "remind");

//temporary fixing for squiggling error
export {};
