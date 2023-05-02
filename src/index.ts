/*
 Video [3]
 */
// console.log(Math.floor(10.14))

/*
 Video [4] Statically vs Dynamically Typed Languages
 */
// let age = 20
// if (age > 30 ){
//     console.log("Good")
// }else {
//     console.log(age.repeat(3))
// }

/*
 Video [5] Type Annotations || Signature
  -> Indicate The Data Type of Variables
  -> Indicate The Data Type of Functions Input/Output
  -> Object, etc
 */

// let theName: string = "Shehab"
// let theAge: number = 29
// let hire: boolean = false
// let all: any = "ahmed"

// theName = "Taher"
// all = 30


// function add(n1:number,n2:number){
//     return n1 + n2;
// }
// console.log(add(1,2))
// console.log(typeof(add(1,2)))

/*
 Video [6] Type Annotations With Arrays
 */

// let all: (string | number | boolean) = "Shehab";
// all = "A"
// all = 100
// all = true

// let myFriends:string[] = ["Shehab","Hakeem","Nagah", 10]

// for (let i = 0 ; i < myFriends.length; i++){
//     console.log(myFriends[i].repeat(3))
// }

/*
 Video [7] Type Annotations With Multidimensional Arrays
 */

// let arrayOne: number[] = [1, 2, 3, 4, 5]
// let arrayTwo: string[] = ["A", "B", "C"]
// let arrayThree: (string | number) [] = [1, 2, 3, 4, "A", "B", "C"]

// let arrayFour: (string | number | string[] | boolean) [] = [1, 2, 3, 4, "A", "B", ["C","D"], true,false]
// let arrayFive = [1, 2, 3, 4, "A", "B", ["C","D"], true,false]

/*
 Video [8] Type Annotations With Function
  -> noImplicitAny
  -> noImplicitReturns: --will check All Code Paths In a Function To Ensure They Return A Value
  -> noUnusedLocals: --Report Errors on Unused Local Variables
  -> noUnusedParameters: --Report Errors on Unused Parameters In Functions
 */

// let showMsg = true
// function showDetails(name: string, age: number, salary: number): string {
//     let test = 10
//     if (showMsg) {
//         return `Hello ${name}, Age is ${age}, Salary is ${salary}, Test Variable ${test}`
//     }
//     return "No Data To Show"
// }
// console.log(showDetails("shehab", 30, 7000))

/*
Video [9] Function Optional and Default Parameters
-> In JavaScript, Every Paramter Is Optional => "undefined" If you didn't Use it
-> "?" Optional Parameter
*/
// function showData(name: string, age: number, country?: string) {
//     return `${name} - ${age} - ${country}`
// }
// console.log(showData("Shehab", 30))

/*
Video [10] Function Rest Parameters
-> All is Under Type Number
*/

// function addAll(...nums: number[]) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         result += nums[i]
//     }
//     // nums.forEach((num) => result += num)
//     return result
// }
// console.log(addAll(10, 20, 30, 100,10.5,+true))


/*
Video [11] Type Annotations With Anonymous And Arrow Function
*/

// const add = function (num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(add(10, 20))

// const addWithArrow = (num1: number, num2: number): number => num1 + num2
// console.log(addWithArrow(10, 20))


/*
Video [12] Type Alias
*/

// type st = string

// let theName : st = "Shehab"

// theName = "Taher"

// type stAndNum = string | number 
// let all : stAndNum = 10
// all = "Ahmed"

/*
Video [13] Type Alias Advanced
*/

// type Buttons = {
//     up: string,
//     right: string,
//     down: string,
//     left: string,
// }

// type last = Buttons & {
//     x: boolean
// }

// function getActions(btns: last) {
//     console.log(`Action For Button Up Is ${btns.up}`)
//     console.log(`Action For Button right Is ${btns.right}`)
//     console.log(`Action For Button down Is ${btns.down}`)
//     console.log(`Action For Button left Is ${btns.left}`)
// }

// getActions({ up: "Jump", right: "Go right", down: "Go down", left: "Go left", x: true })


/*
Video [14] Literal Types
*/

// type nums = 0 | 1 | -1 
// function compare(num1: number, num2: number): nums { 
//     if(num1===num2){
//         return 0;
//     }else if(num1 > num2) {
//         return 1;
//     }else{
//         return -1;
//     }
// }
// console.log(compare(5,8))
// console.log(compare(20,8))
// console.log(compare(8,8))

// let myNumber : nums = 1

/*
Video [15] Data Types
-> Is Another Sort of Array Type
-> We knows Exactly How Many Elements It Contains
-> We knows Which Types It Contains At Specific Positions
*/

// let article: readonly [number, string, boolean] = [11, "Title One", true]

// article = [12, "Title Two", false]
// // article.push(100)

// console.log(article)

// const [id, title, published] = article
// console.log(id)
// console.log(title)
// console.log(published)

/*
Video [16] Void And Never
-> Void :  - Function that will return nothing
           - Function In JavaScript That Not Return A Value Will Show undefined
           - undefined in not void
-> Never : - Return Type Never Returns
           - The Function Doesn't Have A Normal Completion
           - It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

// function logging(msg: string) {
//     console.log(msg)
//     return
// }
// console.log(logging("I am Message"))
// console.log("test")

// const fail = (msg: string) => {
//     throw new Error(msg)
//     return 10
// }

// function alwaysLog(name: string) : never {
//     while(true){
//         console.log(name)
//     }
// }
// alwaysLog("shehab")
// console.log("Test")

/*
Video [17] Part 1  Enums => Enumerations 
-> Allow Us To Declare A Set Of Named Constants
-> Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
-> It Organize Your Code
-> By Default Enums Are Number-Based, First Element Is 0
-> There A Numeric Enums
-> There A String-Based Enums
-> There Heterogeneous Enums [String + Number]
*/

// const KIDS = 15
// const EASY = 9
// const MEDIUM = 6
// const HARD = 3
// enum level {
//     KIDS = 15,
//     EASY = 9,
//     MEDIUM = 6,
//     HARD = 3
// }
// let lvl: string = "Easy"

// if(lvl === "Easy"){
//     console.log(`The level Is ${lvl} And Number of Seconds Is ${level.EASY}`)
// }

/*
Video [18] Part 2  Enums => Enumerations
-> Enum Can Refer To Other Enum
-> Enum Can Refer To Same Enum
-> Enum Can Have Calculations
-> Enum Can Have Functions
*/

// function getHardSeconds() : number {
//     return 3
// }

// enum Kids {
//     Five = 25,
//     Seven = 20,
//     Ten = 15
// }
// const enum level {
//     KIDS = Kids.Ten,
//     EASY = 9,
//     MEDIUM = EASY - 3,
//     HARD = getHardSeconds(),
// }
// let lvl: string = "Easy"

// if(lvl === "Easy"){
//     console.log(`The level Is ${lvl} And Number of Seconds Is ${level.HARD}`)
// }


/*
Video [19] Data Types => Type Assertions
-> Sometime Compiler Doesn't Know the Information We Do
-> TypeScript is not Performing any check to make Sure Type Assertion is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement
// let myImg = <HTMLImageElement> document.getElementById("my-img") 
// console.log(myImg.src)

// let data: any = '1000'
// console.log((data as string).repeat(3))

/*
Video [20] Union & Intersection Types
-> Union Type :  - the |  Symbol is used to create the Union => "or"
-> Intersection Type : - Is a type that combines Several types into One
                      - the & Symbol is used to create an Intersection => "and"
*/

// let all : number | string = 100

// type A = {
//     one: string,
//     two: number,
//     three: boolean,
// }
// type B = A & {
//     four: number
// }
// type C = {
//     five :boolean
// }

// type mix = A & C

// function getActions(btns: mix) {
//     console.log(`Hello ${btns.one}`)
//     console.log(`Hello ${btns.two}`)
//     console.log(`Hello ${btns.three}`)
//     console.log(`Hello ${btns.five}`)
// }
// getActions({ one: "shehab", two: 30, three: false,five:true })


/*
Video [21] Type Annotations With Object
*/


// let myObject : {
//     readonly username: string,
//     id : number,
//     hire?: boolean,
//     skills: {
//         one:string,
//         two:string,
//     }
// } = {
//     username: "shehab",
//     id: 30,
//     // hire: true,
//     skills : {
//         one: "JavaScript",
//         two: "TypeScript"
//     }
// }

// // myObject.username = "taher"
// myObject.id = 100
// myObject.hire = false

// console.log(myObject.username)
// console.log(myObject.id)
// console.log(myObject.hire)
// console.log(myObject.skills.one)


/*
Video [22] Interface Declaration
-> Serve like Types
-> The interface describes the shape of an Object
-> It Define The Syntax To Follow
-> Use with Object
-> Use With Function
-> Use Read Only andOptional Operator
*/

// interface User {
//     id?: number,
//     readonly username: string,
//     country: string
// }
// let user: User = {
//     id: 1,
//     username: "shehab",
//     country: "Egypt"
// }

// // user.username = "Momen"
// user.country = "USA"

// console.log(user)

// function getData(data: User) {
//     // console.log(`Id is ${data.id}`)
//     console.log(`Id is ${data.username}`)
//     console.log(`Id is ${data.country}`)
// }
// getData({id:2,username:"Taher",country:"KSA"})


/*
Video [23] Interface Methods & Params
*/


// interface User {
//     id: number,
//     username: string,
//     country: string,
//     sayHello(): string,
//     sayWelcome: () => string,
//     getDouble(num: number): number
// }
// let user: User = {
//     id: 1,
//     username: "shehab",
//     country: "Egypt",
//     sayHello() {
//         return `Hello ${this.username}`
//     },
//     sayWelcome: () => {
//         return `Welcome ${user.username}`
//     },
//     getDouble(n) {
//         return n * 2
//     }
// }



// console.log(user.id)
// console.log(user.sayHello())
// console.log(user.sayWelcome())
// console.log(user.getDouble(4))

/*
Video [24] Interface and ReOpen
-> Reopen The Interface And Use Cases
*/

// //Home Page
// interface Settings {
//    readonly theme: boolean,
//     font: string,
// }
// //Articles Page 
// interface Settings {
//     sidebar: boolean,
// }
// //Contact Page 
// interface Settings {
//     external: boolean
// }

// let userSettings: Settings = {
//     theme: true,
//     font: "Arial",
//     sidebar: false,
//     external: true,
// }

/*
Video [25] Interface Extend
*/

// interface User {
//     id: number,
//     name: string,
//     country: string
// }

// interface Moderator {
//     role: string | number
// }

// interface Admin extends User, Moderator {
//     protect: boolean,
// }
// let user: Admin = {
//     id: 30,
//     name: "Shehab",
//     country: "Saudi Arabia",
//     role: 1,
//     protect: true
// }

/*
Video [26] Interface Vs Type Aliases
-> Take a Look on HTMLElement Interface
*/

// let el = document.getElementById("id") as HTMLElement
// //Home Page
// interface Settings {
//    readonly theme: boolean,
//     font: string,
// }
// //Articles Page 
// interface Settings {
//     sidebar: boolean,
// }
// //Contact Page 
// interface Settings {
//     external: boolean
// }

// let userSettings: Settings = {
//     theme: true,
//     font: "Arial",
//     sidebar: false,
//     external: true,
// }

/*
Video [27] Class Type Annotations
*/


// class User {
// u:string;
// s:number;
// msg:() => string;
//     constructor(username : string, salary : number) {
//         this.u = username;
//         this.s = salary;
//         this.msg = function() {
//             return `Hello ${this.u}, Your Salary is ${this.s}`
//         }
//     }
//     sayMsg(){
//         return `Hello ${this.u}, Your Salary is ${this.s}`
//     }
// }

// let userOne = new User("Shehab",6000)

// console.log(userOne.u)
// console.log(userOne.s)
// console.log(userOne.msg())
// console.log(userOne.sayMsg())

/*
Video [28] Class Access Modifiers & Paramters Properties
    ->Public :    - All Members of Class in Typescript are Public
                  - All Public Members Can be Accessed Anywhere Without Any Restrictions
    ->Private :   - Members are Visible Only to that Class and are not Accessible outside the class
    ->Protected : - same Like Private But Can Be Accessed using the Deriving Class
    => TypeScript is a layer on top of JavaScript
    => It Should Remove All Annotations And Although Access Modifiers "Private for Example"
*/


// class User {
// msg:() => string;
//     constructor(private username : string, protected salary : number , public readonly address:string) { 
//         this.msg = function() {
//             return `Hello ${this.username}, Your Salary is ${this.salary}`
//         }
//     }
//     sayMsg(){
//         return `Hello ${this.username}, Your Salary is ${this.salary}`
//     }
// }

// let userOne = new User("Shehab",6000 , "cairo")

// // console.log(userOne.username)
// // console.log(userOne.salary)
// console.log(userOne.msg())
// console.log(userOne.sayMsg())



/*
Video [29] Class Get and Set Accessors
*/


// class User {
// msg:() => string;
//     constructor(private _username : string, public salary : number , public readonly address:string) { 
//         this.msg = function() {
//             return `Hello ${this._username}, Your Salary is ${this.salary}`
//         }
//     }
//     sayMsg(){
//         return `Hello ${this._username}, Your Salary is ${this.salary}`
//     }
//     get username():string {
//         return this._username;
//     }
//     set username(value:string) {
//         this._username = value;
//     }
// }

// let userOne = new User("Shehab",6000 , "cairo")

// console.log(userOne.username)
// userOne.username="Taher"
// console.log(userOne.username)
// console.log(userOne.salary)
// console.log(userOne.msg())
// console.log(userOne.sayMsg())

/*
Video [30] Class Get and Set Accessors
-> Don't use "name , length, call"
*/

// class User {
//     static created: number = 0
//     // private static created: number = 0
//     static getCount(): void {
//         console.log(`${this.created} Objects Created`)
//     }
//     constructor(public username: string) {
//         User.created++
//     }
// }

// let user1 = new User("Shehab")
// let user2 = new User("Taher")
// let user3 = new User("Mokhtar")
// let user4 = new User("Hassan")
// console.log(User.created)
// User.getCount()

/*
Video [31] Class Implement Interface
*/

// interface Settings {
//     theme: boolean,
//     font?: string,
//     save():void
// }
// class User implements Settings {
// constructor(public usename:string , public theme:boolean, public font:string){}
// save(): void {
//     console.log("Saved")
// }
// update():void{
//     console.log("Updated")
// }
// }

// let userOne = new User("Shehab",true,"Open Sans")

// console.log(userOne.usename)
// console.log(userOne.font)

// userOne.save()
// userOne.update()

/*
Video [32] Abstract Classes and Members
->We can't Create an Instance of an abstract Class
*/

// abstract class Food {
//     constructor(public title: string) { }
//     abstract getCookingTime(): void
// }
// class Pizza extends Food {
//     constructor(title:string, public price:number){
//         super(title)
//     }
//     getCookingTime(): void {
//         console.log("cooking Time For Pizza Is 1 Hour")
//     }
// }
// class Burger extends Food {
//     constructor(title:string, public price:number){
//         super(title)
//     }
//     getCookingTime(): void {
//         console.log("cooking Time For Burger Is Half Hour")
//     }
// }

// let pizzaOne = new Pizza("cheese Pizza",100)

// console.log(pizzaOne.title)
// console.log(pizzaOne.price)
// pizzaOne.getCookingTime()

/*
Video [33] Polymorphism & Method Override
-> Polymorphism :    - Classes Have The Same Methods But Different Implementations
-> Method Override : - Allowing Child Class To Provide Implementation Of Method In Parent Class
                     - a Method In Child Class must have same name as Parent Class
-> noImplicitOverride
*/

// class Player{
//     constructor(public name:string){}
//      attack():void{
//         console.log("attacking Now")
//     }
// }

// class Amazon extends Player{
//     constructor( name:string, public spears:number){
//         super(name)
//     }
//     // override attack(): void {
//     attack(): void {
//         super.attack()
//         console.log("attacking With Spear")
//         this.spears -= 1
//     }
// }
// class Barbarian extends Player{
//     constructor(name:string, public axeDurability:number){
//         super(name)
//     }
//     // override attack(): void {
//         attack(): void {
//         // super.attack()
//         console.log("attacking With Axe")
//         this.axeDurability -= 1
//     }
// }


// let barOne = new Barbarian("shehab",100)
// console.log(barOne.name)
// barOne.attack()
// console.log(barOne.axeDurability)

/*
Video [34] Generics
-> Help Write A reusable Code
-> Allow to pass type As A parameter to Another Type
-> You will be Able to Deal With Multiple Type Without Using " : Any Type "
-> We Can Create : - Generics Classes
                   - Generics Functions
                   - Generics Methos
                   - Generics Interfaces
*/

// function returnNumber (val:number) : number {
//     return val
// }
// function returnString (val:string) : string {
//     return val
// }
// function returnBoolean (val:boolean) : boolean {
//     return val
// }

// function returnType <T>(val:T):T{
//     return val
// }

// console.log(returnType<boolean>(true))
// console.log(returnType<number>(100))
// console.log(returnType<string>("shehab"))
// console.log(returnType<number[]>([1,2,3,4]))


/*
Video [35] Generics Multiple Types
-> Arrow Function
-> Multiple Types
*/

// function returnType<T>(val: T): T {
//     return val
// }

// console.log(returnType<string>("shehab"))
// console.log(returnType<number>(100))

// const returnTypeArrowSyntax = <T>(val: T): T => val

// console.log(returnTypeArrowSyntax<string>("shehab"))
// console.log(returnTypeArrowSyntax<number>(100))

// function testType<T>(val: T): string {
//     return `the Value Is ${val} and the Type Is ${typeof val}`
// }

// console.log(testType<string>("shehab"))
// console.log(testType<number>(100))

// function multipleType<T, S>(valueOne: T, valueTwo: S): string {
//     return `the First Value Is ${valueOne} and the Second Value Is ${valueTwo}`
// }

// console.log(multipleType<string,number>("shehab",100))
// console.log(multipleType<number,boolean>(100,true))

/*
Video [36] Generics Classes
*/


// class User <T = string> {
//     constructor(public value:T){}
//     show(msg:T): void{
//         console.log(`${msg} - ${this.value}`)
//     }
// }

// let userOne = new User("Shehab")
// console.log(userOne.value)
// userOne.show("User One")

// let userTwo= new User<number | string>(100)
// console.log(userTwo.value)
// userTwo.show("User Two")

/*
Video [37] Generics Classes and Interfaces
*/


// interface Book {
//     itemType: string,
//     title: string,
//     isbn: number
// }

// interface Game {
//     itemType: string,
//     title: string,
//     style: string,
//     price: number
// }

// class Collection<T> {
//     public data: T[] = []
//     add(item: T): void {
//         this.data.push(item)
//     }
// }

// let itemOne = new Collection<Book>()
// itemOne.add({itemType:"Book",title:"atomic Habits",isbn:1234})
// itemOne.add({itemType:"Book",title:"Follow Your Heart",isbn:5678})
// console.log(itemOne)

// let itemTwo = new Collection<Game>()
// itemTwo.add({itemType:"Game",title:"atomic Habits",style:"action",price:1000})
// console.log(itemTwo)