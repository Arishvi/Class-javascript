"use strict";
// let a=30  //implicit
// a=30
// let b:string='arish' //explicit
// function add(num:number){
//     return num
// }
// console.log(add(10));
// impicit Array
// let arr=['a',1,true]
// let strArr=['a','v','l']
// let strNum=[18,5,23]
// arr.push({})
// strArr.push(true)
// strNum.push('a')
// console.log(arr)
// console.log(strArr)
// console.log(strNum
//explicit array
// let strSam:string[]=['a','v','l']
// let numSam:number[]=[18,5,23]
// let boolSam:boolean[]=[true,false]
// let numSample:number[]=[]
// let strSample:string[]=[]
// strSam.push('v','a')
// readonly
// let numSam:readonly[]=[1,2,3]
// numSam.push(5)
// console.log(numSam);
//object
// implicit object
// let person={
//     name:'arish',
//     age:23,
//     ispermenent:true
// }
// person.place='arish'
// person.age=22
// delete person.ispermenent
// console.log(person);
//Explicit object
// type Person={
//     name:string,
//     age:number,
//     isPermennent:boolean
// }
// let person:Person={
//   name:'Arish',
//   age:23,
//   isPermennent:true
// }
// let person1:{name:string,age:number,ispermenent:boolean}={
//     name:'vive',
//     age:20,
//     ispermenent:true
// }
// let person2:Person={
//     name:'arish',
//     age:23,
//     isPermennent:true
// }
// optional
// ?
// type Person={
//     name:string,
//     age:number,
//     ispermenent ?:boolean
// }
// let person:Person={
//     name:'vive',
//     age:20
// }
// console.log(person);
// Union Type
// | //union -or symbol
//implicit
// let Arr=['v',22,false]
// Arr.push('a')
// Arr.push(18)
// Arr.push(true)
// console.log(Arr)
//explicit
// let error:(string|number)
// error=404
// error='network issue'
// let arr:(string|number|boolean)[]=['v',20,true]
// arr.push(18)
// arr.push('v')
// console.log(arr)
//Any type
// let a:any='Arish'
// a=23
// a=false
// console.log(a);
// any array
// let anyArr:any[]=['a',23,false]
// anyArr.push('v')
// anyArr.push(20)
// anyArr.push(true)
// anyArr.push({})
// console.log(anyArr);
//any object
// type Person={
//     name:any,
//     age:any
// }
// let person:Person={
//     name:'Arish',
//     age:23
// }
// let person1:Person={
//     name:23,
//     age:'arish'
// }
// null and undefined
// let a:null=null
// let b:undefined=undefined
// console.log(a);
//Function
// let greet:Function
//  greet=()=>{
//  return 'hello'   
// }
// console.log(greet())
// function add(a:number,b:string){
//     return a+b
// }
// console.log(add(5,'vive'))
//return type
// function add(a:string,b:string):number{
//      return a+b
// }
// console.log(add('vive','arish'))
// union type function
// function add(a:number,b:number,c:(string|number)):number{
//     if(typeof c==='number'){
//         return a+b+c
//     }
//     return a+b
// }
// console.log(add(5,10,'vive'))
// function with optional
// function multiply(a: number, b: number, c?: number): number {
//     if (typeof c !== 'undefined') {
//         return a * b * c
//     }
//     return a * b;
// }
// console.log(multiply(10,10,10))
// function add(a:number,b:number=10,c:number=10):number{
//   return a+b+c
// }
// console.log(add(10));
// type StrorNum=string|number
// function add(a:number,b:number,c:StrorNum=20):number{
//   if(typeof c==='number')
//     return a+b+c 
//   return a+b
// }
// let user=add(10,10)
// console.log(user)
// type User={
//     name:string,
//     age:number
// }
// function object(user:User){
//   console.log(`name is ${user.name} and age is ${user.age}`)
// }
// object({name:'arish',age:23})
//tuples
// typed array
// let userArray=['arish',23,false]
// userArray[0]='vive'
// userArray.push('ari')
// console.log(userArray);
// let userTuple:[string,number,boolean]=['vive',23,true]
// userTuple.push('ari')
// let [userName,age,isPermanent]=userArray
// console.log(age)
//TypeAlias
// type Name=string
// type YesORno=boolean
// type Age=number
// let username:Name='Arish'
// let age:Age=23
// type Arr=string[]
// let arr:Arr=['vive','ari']
// console.log(arr)
// type StrorNum=(string|number)[]
// let strornum:StrorNum=['arish',23]
// strornum.push('vive')
// console.log(strornum)
// type User={
//     name:Name,
//     age:Age,
//     ispermenent:YesORno
// }
// let user:User={name:'arish',age:23,ispermenent:false}
// console.log(user)
// type NameAndAge=[string,number]
// let tuples:NameAndAge=['arish',23]
// let [name1,age]=tuples
// console.log(name1);
//typeCasting
//type to type convert
// as 
// <> 
// let a:unknown='Arish'
// console.log((a as string).toUpperCase());
// console.log((<string>a).length)
// let b:unknown=10
// console.log((b as number))
// console.log(b);
// let c:string='Arish'
// console.log((c as number));
// Enum
//Group of constants
// enum Direction{
//     East,
//     West,
//     South,
//     North
// }
// console.log(Direction)
// enum Direction{
//     East=90,
//     West=180,
//     North=270,
//     South=360
// }
// console.log(Direction);
// enum statusCode{
//     success=200,
//     unauthorized=401,
//     serverError=501,
//     networkIssue=505
// }
// console.log(statusCode)
// let success=201
// console.log(statusCode.success);
// console.log(success);
// enum Direction1{
//    East='East',
//    West='West',
//    North='North',
//    South='South',
// }
// console.log(Direction1)
// Interface
// interface User{
//     name:string,
//     age:number
// }
// let person:User={
//     name:'Arish',
//     age:23
// }
// //function interface
// interface Function{
//     (x:number,y:number):number
// }
// let add:Function=(p1,p2)=>{
//     return p1+p2
// }
// console.log(add(5,5))
// interface Employee extends User {
//     employeeId:number
// }
// let employee:Employee={
//     name:'Arish',
//     age:23,
//     employeeId:1
// }
// class User{
//     id:number
//     constructor(x:number){
//         this.id=x
//     } 
// }
//  let user=new User(10)
//  console.log(user.id)
//class interface
// interface PersonInterface{
//     name:string,
//     age:number
// }
// interface AddressInterface{
//     city:string
// }
// class Person implements PersonInterface,AddressInterface{
//     name: string
//     age: number
//     city: string
//     constructor(name:string,id:number,city:string){
//         this.name=name
//         this.age=id
//         this.city=city
//     }
//      getName(){
//         return this.name
//      }
// }
// let user=new Person('Ari',23,'theni')
// console.log(user.getName());
// //inheritance
// class Student extends Person{
//     studentId:number
//     constructor(id:number,name:string,age:number,city:string){
//         super(name,age,city)
//         this.studentId=id
//     }
//     print(){
//         console.log(`${this.name} ${this.age}`);
//     }
// } 
// let user1=new Student(101,'vive',20,'theni')
// user1.print()
// console.log(user1.studentId);
//Abstract Class
// Incomplete class
//  abstract class Person{
//    abstract name:string
//     abstract print():void
// }
// class Student extends Person{
//     name: string
//     constructor(a:string){
//     super()
//     this.name=a
//     }
//     print(){
//       console.log(this.name);
//     }
// }
// let user=new Student('Vive')
// user.print()
// data modifiers
//public
//protected
//private
// class Person{
//   private name:string
//   private age:number
//     constructor(x:string,y:number){
//         this.name=x
//         this.age=y
//     }
// }
// class Employee extends Person{
//     print(){
//         console.log(this.name,this.age);
//     }
//     changeName(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }
// let empObj=new  Employee('Arish',23)
// empObj.print()
// empObj.changeName('vive',22)
// empObj.print()
// empObj.name='Ari'
// empObj.age=21
// empObj.print()
//Generics
// const toArray=(a:any,b:any)=>{
//     return[a,b]
// }
// toArray(1,'a')
// let toArr=<V>(x:V,y:V,z:V)=>{
//      return [x,y,z]
// }
// let arr=toArr<string>('a','v','g')
// console.log(arr)
// let toArr=<A,V,G>(x:A,y:V,z:G,a:string)=>{
//      return[x,y,z,a]
// }
// let arr=toArr<number,string,boolean>(1,'A',true,'v')
// console.log(arr)
// toArr<string,number,boolean>('v',1,true,'v')
// Generic interface 
// interface Example<V,L>{
//     key:V,
//     value:L
// }
// let example:Example<string,number>={
//     key:'v',
//     value:23
//  }
// let example1:Example<string,boolean>={
//     key:'arish',value:false
// }
// interface Sum<V>{
//     (x:V,y:V):V
// }
// let sum:Sum<number>=(x:number,y:number)=>{
//   return x+y
// }
// console.log(sum(23,22))
// let add:Sum<string>=(x:string,y:string)=>{
//   return x+y
// }
// console.log(add('ari','sh'))
// class Code<V>{
//     code:V
//     constructor(code:V){
//         this.code=code
//     }
// }
// let code=new Code<string>('Arish')
// console.log(code)
// class Code <V extends string>  {
//     code:V
//     constructor(code:V) {
//         this.code=code
//     }
// }
// let user=new Code('Vive')
// console.log(user)
// rest parameter
// function add(a:number,b:number,...c:number[]){
//     console.log(c)
//     let d=c.reduce((a,b)=>a+b)
//     return a+b+d
// }
// let ad=add(1,2,3,4,5,6,7)
// console.log(ad);
//function signature
// let add:(x:number,y:number,c:number)=>number;
// add=(a:number,b:number,c:number):number=>{
//     return a+b+c
// }
// console.log(add(5,5,5));
