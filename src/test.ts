// console.log(Math.ceil(38.23))
// let number : number;

// let string: string = "string"
// const add = (n1: number , n2: number) => n1 + n2

/*
  Type Annotations With Arrays
*/
// lesson four
// let all: string | number | boolean = "Osama";
// all = "A";
// all = 100;
// all = true;

// let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i].repeat(3));
// }

// lesson 5 
/*
  Type Annotations With Multidimensional Arrays
*/

// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// let arrayFour: (string | number | string[] | boolean)[] = [true, 1, 2, 3, 4, "A", "B", ["C", "D"], true, false];

// annotation with functions 

/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/
// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) : string {
//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
//   }
//   return `No Data To Show`;
// }

// console.log(showDetails("Osama", 40, 5000));
// ===========================
// ======= lesson six ========
// ===========================
/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

// function showData(name?: string, age?: number, country?: string) {
//   return `${name} - ${age} - ${country}`;
// }

// console.log(showData())

// ===========================
// ======= lesson SEVEN ======
// ===========================
/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/
// function addAll(...nums: number[]) : number {
//   let result = 0;
// //   for (let i = 0; i < nums.length; i++) {
// //     result += nums[i];
// //   }
//   // nums.forEach((num) => result += num);
//   nums.map((n) => {result += n})
//   return result;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));

/*
  Function
  - Anonymous Function
  - Arrow Function
*/
// ===========================
// =========  Lesson  ========
// ===========================

// const add = function(n1: number, n2: number) : number {
//     return n1 + n2
// }
// console.log(add(1, 2))

// const addWithArrow = (n1: number, n2: number) : number => n1 + n2

// console.log(addWithArrow(2, 3))

// ===========================
// =========  Lesson  ========
// ===========================

/*
  Data Types
  - Type Alias
*/

// type st = string;
// let theName: st = "Elzero";
// theName = "Osama";

// type standnum = string | number;
// let all: standnum = 10;
// all = 100;
// all = "Osama";

// ===========================
// =========  Lesson  ========
// ===========================

/*
  Data Types
  - Advanced Type Alias
*/

// type Buttons = {
//   up: string,
//   right: string,
//   down: string,
//   left: string
// }

// type Last = Buttons & {
//   x: boolean
// }

// function getActions(btns: Last) {
//   console.log(`Action For Button Up Is ${btns.up}`);
//   console.log(`Action For Button Right Is ${btns.right}`);
//   console.log(`Action For Button Down Is ${btns.down}`);
//   console.log(`Action For Button Left Is ${btns.left}`);
// }

// getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });


/*
  Data Types
  - Literal Types
*/

// ===========================
// =========  Lesson  ========
// ===========================

// type nums = 0 | 1 | -1;

// function compare(num1: number, num2: number) : nums {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1

// let myNumber: nums = 1;

/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/

// ===========================
// =========  Lesson  ========
// ===========================

// let article: readonly [number, string, boolean] = [11, "Title One", true];
// article = [12, "Title Two", false];
// // article.push(100);
// console.log(article);
// article[0].toFixed(50)
// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);

// ===========================
// =========  Lesson  ========
// ===========================

/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

// function logging(msg: string) : void {
//   console.log(msg);
//   return;
// }

// console.log(logging("Iam A Message"));
// console.log("Test");

// const fail = (msg: string) => {
//   throw new Error(msg);
//   // return 10;
// }
// function alwaysLog(name: string): never {
//   while(true) {
//     console.log(name);
//   }
// }

// alwaysLog("Osama");
// console.log("Test");

// ===========================
// =========  Lesson  ========
// ===========================

/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

// function getHardSeconds() : number {
//   return 3;
// }

// enum Kids {
//   Five = 25,
//   Seven = 20,
//   Ten = 15
// }

// enum Level {
//   Kid = Kids.Ten,
//   Easy = 9,
//   Medium = Easy - 3,
//   Hard = getHardSeconds()
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
// }

// ===========================
// ==== Type Assertions  =====
// ===========================
/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/



// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);
// // data as string it will handle the data as a string
// let data: any = 1000;
// console.log((data as string).repeat(3));

// ===========================
// == Union AND Intersectio ==
// ===========================
/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }

// type B = A & {
//   four: number
// }

// type C = {
//   five: boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//   console.log(`Hello ${btns.one}`);
//   console.log(`Hello ${btns.two}`);
//   console.log(`Hello ${btns.three}`);
//   console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });

// ===========================
// =========  Interface Introduction  ========
// ===========================

/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

// interface User {
//   id?: number,
//   readonly username: string,
//   country: string
// }

// let user: User = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt"
// }

// user.country = "Syria";

// console.log(user);

// function getData(data: User) {
//   console.log(`Id Is ${data.id}`);
//   console.log(`Username Is ${data.username}`);
//   console.log(`Country Is ${data.country}`);
// }

// getData({ id: 200, username: "Osama", country: "KSA" });

// ===========================
// =========  Lesson  ========
// ===========================

/*
  Interface
  - Interface Method And Parameters
*/

// interface User {
//   id: number;
//   username: string;
//   country: string;
//   sayHello() : string;
//   sayWelcome: () => string;
//   getDouble(num: number) : number;
// }

// let user: User = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
//   sayHello() {
//     return `Hello ${this.username}`;
//   },
//   sayWelcome: () => {
//     return `Welcome ${user.username}`;
//   },
//   getDouble(n) {
//     return n * 2;
//   }
// }
// console.log(user.getDouble(300))
// console.log(user.sayHello())
// console.log(user.sayWelcome())
// ===========================
// =========  Lesson  ========
// ===========================

/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// // Homepage
// interface Settings {
//   readonly theme: boolean;
//   font: string;
// }

// // Articles Page
// interface Settings {
//   sidebar: boolean;
// }
// // NavBar Page
// interface Settings {
//   padding?: number;
// }
// // Contact Page
// interface Settings {
//   external: boolean;
// }

// let userSetting: Settings = {
//   theme: true,
//   font: "Open Sans",
//   padding: 20,
//   sidebar: false,
//   external: false,
// }
// ===========================
// =========  Interface Extend  ========
// ===========================

/*
  Interface
  - Extending Interfaces
// */

// interface User extends Moderator {
//   id: number;
//   username: string;
//   country: string;
// }

// interface Moderator {
//   role: string | number;
// }

// interface Admin extends User,Moderator {
//   protect?: boolean;
// }

// let user: Admin = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
//   role: "User",
//   protect: true
// }

// console.log(user.id);
// ===========================
// =========  Interface Final Discussion  ========
// ===========================

/*
  Interface
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/

// let el = document.getElementById("id") as HTMLElement;

// // Homepage
// type Settings {
//   readonly theme: boolean;
//   font: string;
//   sidebar: boolean;
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true
// }


// ===========================
// =========  classTypeAnnotation  ========
// ===========================
/*
  // Type Annotations With Class
// */
// interface User {
//   u: string,
//   s: number,
//   msg: () => string
// }
// class User { 
//   constructor(username: string, salary: number) {
//     this.u = username;
//     this.s = salary;
//     this.msg = () => `Hello ${this.u} Your salary Is ${this.s}`
//   }
//   sayMsg() {
//     return `Hello ${this.u} Your Salary is ${this.s}`
//   }
// }

// let userOne = new User("elzero", 6000)
// console.log(userOne.u)
// console.log(userOne.s)
// console.log(userOne.msg())
// console.log(userOne.sayMsg())
// ===========================
// =========  classModifires  ========
// ===========================

/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

// class User {
//   msg: () => string;
//   constructor(private username: string, protected salary: number,public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   } 
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// // console.log(userOne.username);
// // console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());
// ===========================
// =========  classAccessors  ========
// ===========================
/*
  Class
  - Get And Set Accessors
*/

// class User {
//   public get username(): string {
//     return this._username;
//   }
//   public set username(value: string) {
//     this._username = value;
//   }
//   msg: () => string;
//   constructor(private _username: string, public salary: number, public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this._username} Your Salary Is ${this.salary}`;
//   }
//   // get username() : string {
//   //   return this._username;
//   // }
//   // set username(value: string) {
//   //   this._username = value;
//   // }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// userOne.username = "Ahmed";
// console.log(userOne.username);
// console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());
// ===========================
// =========  static members  ========
// ===========================
/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

// class User {
//   static created: number = 0;
//   static getCount() {
//     console.log(this.created)
//     return ;
//   }
//   constructor (public username: string) {
//     User.created += 1
//   }
// }

// let u1 = new User("Younes")
// let u2 = new User("maarouf")
// let u3 = new User("mkl5")

// console.log(User.getCount())
// ===========================
// =========  Implement Interface  ========
// ===========================

// interface Settings {
//   theme: boolean;
//   font?: string;
//   save(): void;
// }

// class User implements Settings {
//   constructor(public username: string, public theme: boolean, public font: string) {
    
//   }
//   save(): void {
//       console.log(`saved`)
//     }
//   update(): void {
//     console.log(`updated`)
//   }
// }

// let userOne = new User("elzero", true, "ubuntu")

// console.log(userOne.username)
// console.log(userOne.font)
// userOne.save();


// ===========================
// =========  AbstractMethod  ========
// ===========================
/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

// abstract class Food {
//   constructor(public title: string) {}
//   abstract getCookingTime() : void;
// }

// class Pizza extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Pizza Is 1 Hour`);
//   }
// }

// class Burger extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Burger Is Half Hour`);
//   }
// }

// let pizzaOne = new Pizza("Awesome Pizza", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);
// pizzaOne.getCookingTime();
// ===========================
// =========  Polymorephism  ========
// ===========================

/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

// class Player {
//   constructor(public name: string) {}
//   attack() : void {
//     console.log("Attacking Now");
//   }
// }

// class Amazon extends Player {
//   constructor(name: string, public spears: number) {
//     super(name);
//   }
//   override attack(): void {
//     super.attack()
//     console.log("Attacking with spear")
//     this.spears -= 1
//   }
// }
// class Barbarian extends Player {
//   constructor(name: string, public axeDurability: number) {
//     super(name)
//   }
//   override attack() : void {
//     super.attack()
//     console.log("attacking with axe")
//     this.axeDurability -= 3.3
//   }
// }

// let barOne = new Barbarian("Younes", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);
// ===========================
// =========  generics  ========
// ===========================

/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

// function returnNumber(val: number) : number {
//   return val;
// }
// function returnString(val: string) : string {
//   return val;
// }
// function returnBoolean(val: boolean) : boolean {
//   return val;
// }

// console.log(returnNumber(100));
// console.log(returnString("Elzero"));
// console.log(returnBoolean(true));

// function returnType<T>(val: T) : T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1, 2, 3, 4]));
// ===========================
// =======  GenericII  =======
// ===========================

/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/
/*
  Generics
  - Classes
*/
/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));
// ===========================
// =========  Lessons  ========
// ===========================
/*
  Generics
  - Classes
*/

// class User<T = string> {
//   constructor(public value: T) {}
//   show(msg: T) : void {
//     console.log(`${msg} - ${typeof this.value}`);
//   }
// }

// let userOne = new User<number>(10)
// console.log(userOne.show(10))

// let userTwo = new User<string>("Younes")
// console.log(userTwo.value)

// ===========================
// ===  class&&Interfaces  ===
// ===========================

/*
  Generics
  - Classes And Interfaces
*/

// interface Book {
//   itemType: string;
//   title: string;
//   isbn: number;
// }

// interface Game {
//   itemType: string,
//   title: string,
//   style: string,
//   price: number | string,
// }

// class Collection<T> {
//   public data: T[] = [];
//   add(item: T) : void {
//     this.data.push(item);
//   }
// }

// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
// itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
// console.log(itemOne);

// let itemTwo = new Collection<Game>();
// itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
// console.log(itemTwo);