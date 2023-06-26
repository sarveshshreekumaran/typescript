# Typescript
 freeCodeCamp.org TypeScript – Full Tutorial by Hiteshchoudhary
***
### What is typescript?
Typescript is a superset of javascript. It allows to write javascript in a much precise manner. Typescript is all about TypeSafety.

Example code :
 2 + "2" = '22'
 
 ![TypeSafety-ex ](https://user-images.githubusercontent.com/107741632/229725708-35bacd5f-9fb2-4da6-b2e3-22f08ea67401.jpg)
 ***
### What typescript does:
**static checking :** Analyze the code as we type. <br/>
<br>
Code format : **.ts, .tsx** extensions. <br/>
Typescript code converted into javascript. <br/>
Typescript is a development tool.

Typescript free playground : [typescript playground.](https://www.typescriptlang.org/play) <br/>
Example code :
`var user = {name:"sarvesh", age:22};
var email = user.email;`

![Typescript-playground-ex](https://user-images.githubusercontent.com/107741632/229774573-d822be5c-aa7f-4f2c-9c00-a3f267500bfb.png)
***
### Typescript installation :
Before installing typescript, you have to install these things, if you have already installed these thinks that's good.
- node
- npm <br/>
And checkout there versions, because if any thing wrong in the installation, it will throw errors. And it will help out to find the problem and fix it. `-v` this flag will help to find out the version of your package. 

Example : `node -v`

If all looks good you will see like this. <br/>

![versioncheck](https://user-images.githubusercontent.com/107741632/229807935-89699a43-ab68-4274-8f9c-56b74b64446c.jpg) <br/>

For global installation: <br/>
`npm install -g typescript` <br/>

To checkout the typescript version simply use this command `tsc -v` in your terminal. <br/>

I have created a separate branch for code examples, you can find out the codes in that branch.
***
### Types in typescript
- number
- string
- boolean
- null
- undefined
- void
- object
- array
- tuples
- any
- never
- unknown <br/>
And so on ... <br/>
### typescript situations
- A function accepts 2 numbers
- A function returns a string
### Typescript syntax
let variableName: type = value; <br/>
Example code : `let greetings: string = "Hi sarvesh";`
***
### number, boolean in typescript

Example code : `let age: number = 22; let userLoggedIn: boolean = false;` <br/>

### Type inference:
 Once you set a value of a variable, you don't need to mention the type. Because here is typescript work smart, and find out What type is used on that variable. So the best practice is always using like this `let age = 22;`. you can always define the variable type as your wish, but that is not a good practice. There are some special cases, that we want to mention. What type is used in that variable? We can see it further.
 ***

### any in typescript:
 When you declaring a variable with out data type, TypeScript infer as any data type. See the below example.
 
 ![Before - without data type](https://github.com/sarveshshreekumaran/typescript/assets/107741632/a128e297-4cd2-4016-8537-fbc3c9fd2a6f)

TypeScript documentation says don't use any data type, beacuse any isn't type-checked. So it accept any data type (ex: string, boolean, number,. etc) in that variable, it may cause a problem. Better use noImplicityAny compiler flag, it will report error for the implied any data type variable declartion. We can see noImplicityAny compiler flag more details in future.<br/>

So that the below example is recommended, See we defined the data type as string. But after we assigning the boolean value, Here the TypeScript throw a msg, hey! the variable type is string, you can't assing a boolean. 

![After - with data type](https://github.com/sarveshshreekumaran/typescript/assets/107741632/5a17d313-d44d-4d03-a50e-ba21c9766d84)
***
