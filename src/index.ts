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

interface User {
    id?: number,
    readonly username: string,
    country: string
}
let user: User = {
    id: 1,
    username: "shehab",
    country: "Egypt"
}

// user.username = "Momen"
user.country = "USA"

console.log(user)

function getData(data: User) {
    // console.log(`Id is ${data.id}`)
    console.log(`Id is ${data.username}`)
    console.log(`Id is ${data.country}`)
}
getData({id:2,username:"Taher",country:"KSA"})