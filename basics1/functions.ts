//function in typescript (part-1)//

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

//function in typescript (part-2)//

//Example-1 string-> Mentiond what data type should return this function
const greet = (name: string): string => {
  return "Hello " + name;
};

greet("sarvesh");

//Example-2 string-> Mentiond what data type should return this map function
let villans = ["saniyan sakkada", "pattasu balu", "muthu pandi"];

villans.map((villan: string): string => {
  return `my villan ${villan}`;
});

//Example-3 void-> Mentiond what data type should return this function
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

consoleError("void");

//Example-4 never-> Mentiond what data type should return this function
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

handleError("error");

//temporary fixing for squiggling error
export {};
