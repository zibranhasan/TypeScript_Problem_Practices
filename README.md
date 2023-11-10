Interview Questions:

1.What are some benefits of using TypeScript over JavaScript in a project?
Ans: supports older browser, type safety, increase productivity, less bugs and less testing.
2.What is the purpose of the optional chaining (?) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each
Ans:optional chaining is like a if else condition
Example: const isAdult = age > 18 ? "adult" : "Not Adult";
here normal if else condition like:
if(age>18){
console.log("adult")
}else{console.log("not adult)}
Nullish coalescing operators: clear concept is based on previous explanation is,for null and undefined it will run the next code.
Example: const isAuthenticated = null;
const result1 = isAuthenticated ?? "Guest"
3.How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?
Ans:
we know js works behavior with non-blocking and synchronous, But by using some function,we can able to run code asynchronously,promise is function like that,data fetch is a asynchorous works, by using async await, before completion of promise js wont run next code.

4.enum is like type alias and type interface
Example:
enum Direction{
up:"UP",
Down:"DOWN",
Left:"LEFT",
Right:"RIGHT"
}
we cal access like this : let direction:Direction = Direction.Up;
Advantages:1.Less error 2.Readability 3.Type safety 4.Readability

5.Explain the role of type guards in TypeScript and provide an example of a custom type guard.

Ans:Type guard is like a filter, which filtered each element of data set by if else condition.
Example:
type NormalUser = {
name: string
};

type AdminUser = {
name:string;
role:"admin";
};
const getUser = (user:NormalUser | AdminUser) => {
if("role" in user){
return user.name;
};
};

6.Can you give an example of how to use "readonly" properties in TypeScript?
Ans:Yess, readonly properties means i can't change that properties value;

class BankAccount{
readonly id:number;
name:string;
balance:number

constructor(id:number, name:string, balance:number){
this.id = id;
this.name = name;
this.balance = balance;
}}

7.Explain what a union type is in TypeScript and provide an example of its usage.
Ans: union type means it take two type and convert it into one type
Example:
type makingNewType = {name:string, roll:number|string} | ({gender:string})

const student: makingNewType = {
name:"zibran",
roll:10,

}
