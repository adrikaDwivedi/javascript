// singleton    from constructor
// Object.create



// obj literals

const mySymb = Symbol("key1")

const jsUser = {
name : "Adrika",
[mySymb] : "hii",
age: 25,
"surname" : "dwivedi",
location: "India",
email: "awwwdrika@gmai.com",
isLoggedIn: false,
lastLoggedIn: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["surname"]);

// console.log(jsUser[mySymb]);

jsUser.greeting  = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());




