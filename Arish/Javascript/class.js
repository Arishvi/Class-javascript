//variable


// let a='Arish'

// let b=50

// let c=true

//variable type

//var 
//let
//const

// var a=10
// let b=10
// const c=30

// js rules

// 1.no javascript keywords name
// 2.dont start with number
// 3.no space and &- 
// 4.its case senstive camel case
// 5.useful variable name
 

//Data types

//primitive types

//string

// let a='arish'
// console.log(a);

//number
// let b=25

//boolean

// let c=true

//undefined

// let d

// console.log(d)

//null

// let f=0
// console.log(f);

//variable types

//var
//let 
//const

// var a=10  //variable decalare

// a=20  // reassiagn

// var a=30  // redecalare

// console.log(a)

//let 

// let b=10  

// b=20  

// let b=30

// console.log(b)

// const 

// const c=10

// c=20

// console.log(c)


//non primitive type
// reference type

//object

// let person={
// name:'Arish',
// age:23,
// sibilings:{
//   brother:'vijay',
//   sister:'swathi'
// }
// }

// console.log(person.sibilings.brother)

// //Array

//index based values


// let arr=['v',1,true,{}]

// console.log(arr[2]);


// //function
              //parameter
//  function mark(t,e,m,s,ss){
//     let sum=t+e+m+s+ss
//     console.log(sum);
//  }             
//  mark(90,95,99,97,95)  //function calling
      //arguments
// mark(90,85,95,90,97)
// mark(95,90,95,99,100)

//concat

// let a="Arish"

// let b="chandran"

// let concat='firstName'+" "+ a +' '+'lastName' +' '+b

// console.log(concat)

// function concat(firstName,LastName){
//    let msg='firstName' +' '+firstName +' '+'lastName'+' '+LastName
//    console.log(msg)
// }
// concat('Arish','Chandran')


//operators


// console.log(20%3);

// let a=10
// let b=20


// console.log(a++)
// console.log(a)

// console.log(++b)
// console.log(b)


//increment decrement 

//prefix   ++a
//postfix  a++

// let a=10
// let b=20

// console.log(a++)
// console.log(a)

// console.log(++b)
// console.log(b)

// console.log(++a); 

// console.log(a);

// console.log(--b);
// console.log(b--);
// console.log(b);

// let a=5
// let b=10

//                     //9
//                //6   10    10    6
// console.log(++a - b-- + ++b * a++);
//                               //60-50+6




// console.log(10==10)

// console.log(10=='10')

// console.log('10'==10)
// '10'=='10'


// console.log(10===10)


// console.log('AR'==='Ar')

// console.log(10!=10)

// console.log(10!=='10')


//  let a=10
// let b=10
// let c=20

// console.log(~a);



// console.log(a==b)
// console.log(a!=b)
// console.log(a!==b)

// console.log(a>b)
// console.log(a<b)

// console.log(a>=b);

// console.log(a<=b);

// console.log(~b);

// let a=10

// let b=10

// let c=30

// console.log(a==b && b==c)

// console.log(a==b || b==c)

// console.log(!(a==b))


// asssignment operator

// let a=20

// a=a+10

// a+=10

// console.log(a)

// let b=20
//  b-=10
// console.log(b);

// a*=5
// console.log(a);

// a/=10
// console.log(a);

// let b=10

// b%=7
// console.log(b);

// a**=5

// console.log(a);


// let b='arish'

// let c={}

// let d=[]

// console.log(typeof d)



// console.log(5/0)

// console.log(0/0)



//Conditional statement

// if statement

// let a=50
// let b=5


// if(a==b){
//   console.log('its true')
// }

// if(a==b)
//   console.log('its true')

// else
//   console.log('its false')


// let isRaining=true
// let isCould=false

// if(isRaining || isCould){
//   console.log("dont forget to take umbrealla");
// }
// else{
//   console.log("sky is normal ! enjoy the weather");
// }

//else if statement


// let mark=50

// if(mark===10){
//   console.log('your mark Ten')
// }
// else if(mark===20){
//   console.log('your mark Twenty')
// }
// else if(mark===30){
//   console.log('your mark thirty')
// }
// else if(mark===40){
//   console.log('your mark forty')
// }
// else{
//   console.log('you Fail')
// }


// ternery operator

// let age=19

// let type= age<=18 ? 'its eligibe':'not eligible'

// console.log(type)


// alert('javaScript')

// let msg=prompt('Enter Your Name')

// console.log(msg)

// let age=prompt("Enter your age")

// if(age>=18)
//   alert('Eligible to vote')

// else
// alert(' Not Eligible for vote')



// let mark=prompt('enter your mark')

// if(mark>=90)
//   alert("grade A")

// else if(mark >=80)
//   alert("grade B")

// else if(mark >=70)
//   alert("grade c")

// else if(mark>=60)
//   alert("grade d")

// else if(mark>=50)
//   alert("grade E")
// else
//   alert("fail")


// let con=confirm('its true')
// console.log(con)

//loop

//1.for
//2.while
//3.do while


//for 

// for(intialization;condition;increment/decrement)

// for(let i=10;i>=1;i--){
//   console.log(i)
// }

// 0 to 10

// for(let i=10;i>=1;i--){
//   console.log(i);
// }

//10 to 1
 
// for(let i=10;i>=1;i--){
//   console.log(i);
// }


// for(let i=1;i<=20;i++){
//   if(i%2==0){
//      console.log(i)
//   }
// }


// let i=0
// while(i<=10){
// console.log(i);
// }
//   i++



// let j=0
// while(j<=0){
//   console.log(j);
//   j++
// }

//do while

// let i=0
// do{
//   console.log(i)
//   i++
// }
// while(i<0)


// let i=100
// do{
// if(i%5==0){
//   console.log(i)
// }
//   i++
// }
// while(i<=200)

// let i=0
// do{
//   if(i%2==0){
//   console.log(i);
//   }
//   i++
// }
// while(i<=20)

// let i=0
// do{
//   if(i%2==0){
//     console.log(i);
//   }
//   i++
// }
// while(i<20)


// let i=100;
// do{
//   if(i%2==0){
//     console.log(i);
//   }
//   i--
// }
// while(i>=0);

//while


// let i=0

// do{
// console.log(i)
// i++
// }
// while(i<0)

// let string=""

// for( i=1;i<=5;i++){
//   for(j=1;j<=i;j++){
//   string+=i
//   }
//   string+="\n"
// }
// console.log(string);


// //switch

// let grade='v'

// switch(grade){
//   case 'v':
//     console.log('its v')
//     break;

//   case 'b':
//     console.log('its b')
//     break;

//   case 'c':
//     console.log('its c')
//    break

//     default:
//       console.log('its N     b             an');
//     break
// }

 

// const grade = 70

// switch (true) {

// 	case grade >= 90:
// 		console.log("A");
// 		break;

// 	case grade >= 80:
// 		console.log("B");
// 		break;

// 	case grade >= 70:
// 		console.log("C");
// 		break;

// 	case grade >= 60:
// 		console.log("D");
// 		break;

// 	default:
// 		console.log("Fail");
// }

// // // program using switch statement

// let b= 2;

// switch (b) {

//     case 1:
//         b = 'one';
//         break;
//     case 2:
//         b = 'two';
//         break;

//         case 3:
//           b='three';
//           break;

//     default:
//         b = 'not found';
//         break;
// }
// console.log("The value is "+ b)


// for in loop

// let person={
//   name:'Arish',
//   age:23
// }

// for(let value in person){
//   console.log(value,person[value])
// }

 // for of loop

// let color=['White','Blue',"Black",'Green']

// for(let colors in color){
//   console.log(colors,color[colors]);
// }

// for(let a in color){
//   console.log(a,color[a])
// }


//concat

// let vive='hello'
// let moo='vanakam'

 // hi hello vankam makale

// console.log('hi'+' '+vive +' '+moo+' '+'makale')

// console.log('hi',vive,'vanakam',moo)

// console.log('happy
// birthday');

// console.log('  Happy','\n','Birthday')

// console.log('I don't know')

// //template literals


// console.log(`I don't know 'Arish' `)
// console.log(` Happy
// birthday`)

// console.log(`hi ${vive} ${moo} makkale`)




// // objects advanced

// let name1='Harish'
// let age=22 

// {
//   let a=20
//   console.log(name1)
//   console.log(a);
// }

// console.log(a)

// let person1={
//   name:'arish',
//   age:23,
//   isAlive:true
// }

// // console.log(age)

// function greet(){
//   let isAlive=true
//   console.log(`my name is ${person1.name} and age is ${person1.age}`);
//   console.log(isAlive);
// }
// greet()

// console.log(isAlive)

// let person={
//   name:'Arish',
//   age:23,
//   isAlive:true,
//   greeting:function(){
//   console.log(`my name is ${this.name} and age is ${this.age}`)
//   }
// }
// person.greeting()

// let person1={
//   name:'pappathi',
//   age:25,
//   isAlive:true,
//   greeting:function(){
//     console.log(`my name is ${this.name} and age is ${this.age}`)
//   }
// }
// person1.greeting()

// let person2={
//   name:'nithya',
//   age:23,
//   isAlive:true,
//   greeting:function(){
//     console.log(`my name is ${this.name} and age is ${this.age}`)
//   }
// }
// person2.greeting()


// // factory function


// function person(name,age,isAlive){
//  return {
//   name,
//   age,
//   isAlive,
//   greeting(){
//     console.log(`my name is ${this.name} and age is ${this.age}`)
//   }
// }
// }

// let user=person('Arish',23,true)
// user.greeting()

// let user1=person('abigail',25,true)
// user1.greeting()

// let user2=person('paapathi',25,true)
// user2.greeting()

// let user3=person('nithiya',25,true)
// user3.greeting()

// //constructor

// function Person(name,age){
//  this.name=name
//  this.age=age
//  this.greet=function(){
//     console.log(`my name is ${this.name} and age is${this.age}`);
//    }
// }
// let user=new Person('vive',20)
// user.greet()

// //constructor property

// let person={}

// let name='Arish'
// let age=23

// console.log(person,name,age)

// let person1=new Object()

// let name1= String('vive')

// let age1= Number(20)

// let isAlive= Boolean(true)


// console.log(person1,name1,age1,isAlive)


// console.log(typeof name)
// console.log(typeof name1)


//function are object

// function Person(name){
// this.name=name
// this.greeting=function(){
//   console.log(`hello ${this.name}`);
// }
// }
// let person=new Person('Arish')
// person.greeting()

// console.log(Person)

// let person1=new Function('name',`this.name=name
// this.greeting=function(){
//   console.log(hello)
// }`)

// console.log(person1)



//cloning object

// let user={
//   name:"arish",
//   getFullName(){
//     console.log(`name is ${this.name}`);
//   }
// }

// let another=user

// console.log(another)

// let another={}

// for(let val in user){

//    another[val]=user[val]
// }

// console.log(another)

//assign method

// let another=Object.assign({age:23},user)

// console.log(another);

// //sperad operator
// //es6


// let another={...user,age:23}

// console.log(another)

// let arr=[1,2,3,4,5]

// let arr1=[...arr]

// console.log(arr1)


//functions

//function declaration

// function add(a,b){
//   console.log(a+b);

// }
// add(5,5)

// function add1(a,b){
//   return a*b
// }

// console.log(add1(10,10))

 //function expression

// let sum=function(a,b){
//   console.log(a+b);
// }

// sum(10,10)

// let sum1=function(a,b){
//   return a*b
// }

// console.log(sum1(10,10))

 // default parameter

//  function greet(name='Arish',age=23){
//    return `my name is ${name} and age is ${age}`

//  }
//  console.log(greet('vive'))

  //  hoisting

  // interpreter

  // console.log(a)

  // var a=10

  // let b=20

  // console.log(b)

  // add(10,10)
    
  // function add(a,b){
  //   console.log(a*b)
  // }

  // sum(10,10)

  // let sum=function(a,b){
  //   console.log(a*b)
  // }


// Temporal dead zone

//var a=undefines
//let b

// console.log(a)
// console.log(b)

// var a=10
// let b=20


// //a=undefined
// //b


// {
// //tdz  //start

// //con
// //con //let a
// console.log(a) //retrun reference error a before intilazation
 
// //

// //end
// }


 // Generators

// function * indexGenerator(){
//   let index=0

//   while(true){
//     yield index++
//   }

// }

// let gen=indexGenerator()

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


//Arrow function

//es6 

// let sum=(a,b)=>
//    a+b


// console.log(sum(10,10))


// let equal=a=>
//   a==10


// console.log(equal(10))

// let arr=[2,3,5,7,10]
// let finSum=function(arr){
//   let sum=0
//   for(let val of arr){
//      sum+=val
//   }
//   return sum

// }
// console.log(finSum(arr))

// let findSum1=arr=>{
//   let sum=1
//   for(let val of arr){
//      sum*=val
//   }
//   return  sum
// }

// console.log(findSum1(arr))



//variable arguments-rest parameter

// let arr=[3,5,6,8,10]

// let findSum=function(...args){
// let result=0
// for(let val of args){
//   result+=val
// }
// return result
// }
// console.log(findSum(5,6,8,10,15))


// let findSum2=function(){
// let sum=1
// console.log(arguments)
// for(let i=0;i<arguments.length;i++){

//   sum*=arguments[i]
 
//   console.log(sum);
// }
// }
// findSum2(8,9,7,6,8,9)


//callback function

// function greetConsole(name){
//   console.log(`hi ${name}`)

// }

// function greetConsole1(name){
//   console.log(`hi ${name}`)
// }


// function greet(a){
//   console.log('callback');
//   a('vive')
 
// }
// greet(greetConsole,greetConsole1)



// function userInput(output){
//  let data =prompt('enter your name:')
//    output(data)
//    }

//    function display(name){
//        alert(`name: ${name}`)
//    }

// userInput(display)


// function greet(name,callback) {
//   console.log('Hi' + ' ' + name)
//   callback()
// }

// function callMe() {
//   console.log('I am callback function');
// }

// greet('Peter',callMe)

//lexical scoping

//higher order function

//inner scope can acces outer scope

// let a=10 

// function summa(){
//   let b=20
//   console.log(a)
//   console.log(b)
// }

// summa()

// // console.log(b)

// function abc(){
//   let c=30
//   console.log(c)
// }

// let a=10  
// console.log(a)

// let b=20
// console.log(b)

// const c=30
// c=40
// console.log(c)

// let d=40
// console.log(d)

// function outer(){
//   let outerVariable='vanakam'
//   function inner(){
//     let innerVariable='makkale'
//     console.log(outerVariable)
//     console.log(innerVariable);
//   }
//   inner()
// } 
// outer()



// // returing function

// function outer(){
//   let outervariable='vanakam' 
//   console.log('hi')
//    function inner(){
//     let innervariable='makale'
//     console.log(`outervaribale, ${outervariable}`)
//     console.log(`innervaribale, ${innervariable}`)
//   }
//     return  inner
// } //dead
//  let user=outer()
//  user()


//closure 

// function a(){
//   let b=12
//   console.log(b)
// }

// a()

// let name='arish'
// console.log(name)


// function outer(name){
//   let outerVariable='leo'
//     console.log(outerVariable)
//     console.log(name);
//       return function (){
//         let innerVariable="das"
//         console.log('outervaribale',outerVariable)
//         console.log('innervariable',innerVariable)
//         console.log("hello",name)
//     } 
//   }

//   let user=outer("vive")
//   user()
  
//   let user1=outer('arish')
//   user1()

//   let user2=outer('yogesh')
//   user2()

//   user()

//   user1()





//   function add(x){
//     return  function (y){
//       return x+y
//      }

//   }

// Set

// set is a object

// collection of values

//unique values

// let arr=[1,1,2,3,4,5,6,6,7,8,9,9]

// console.log(arr)

// let myset1=new Set(arr)
// console.log(myset1)


// let myset1=new Set()

// myset1.add(4)
// myset1.add(5)
// myset1.add(5)
// myset1.add(6)
// myset1.add('vive')
// myset1.add(true)
// myset1.add({a:1})
// myset1.add({a:1})
// myset1.add([1,2,3])
// myset1.add([1,2,3])

// myset1.clear()

// console.log(myset1.delete(5))

// myset1.forEach((val)=>{
// console.log(val)
// })
// console.log(myset1)

// console.log(myset1.has({a:1}))

// console.log(myset1.size)


// Map

//map is a object

//collection of key and value pair

//  let map=new Map()

//  map.set('a',1)
//  map.set('b',2)
//  map.set('c',3)
//  map.set('c',[3])
//  map.set('d',4)
//  map.set('e',3)

//  console.log(map)

//  console.log(map.delete('c'))
//  console.log(map.entries())

// console.log(map.forEach((val)=>{
//   console.log(val);
// }))

// console.log(map.keys())

// console.log(map.values())
// console.log(map.get('c'))





//calculator

// const operator=prompt('Enter operator (+,-,*,/):')
// // console.log(operator);

// const number1= prompt('Enter the first number:')

// const number2=prompt('Enter the second number:')

// let result

// if(operator =='+'){

// result=number1 + number2
// }
//  else if(operator =='-'){

//   result=number1-number2
//   }

//  else if(operator =='*'){

//     result=number1*number2
//     }

//     else{
//       result=number1/number2
//     }

//     console.log(result);


// const str=prompt('enter the Name')

// let newstring=''
// for(let i=str.length-1;i>=0;i--){
// newstring+=str[i]
// }

// console.log(newstring);


// const a=prompt("enter a number")

// for(let i=1;i<=10;i++){
// let ans=a*i
// console.log(`${a}*${i}= ${ans}`);
// }



// const person ={
//   name:"arish",
//   age:22
// }

// const student={
//   name:"vive"
// }

// const merobj=Object.assign({id:5},person,student)

// // const merobj={...person,...student}

// console.log(merobj);


 //String method


//  let firstName="Arish" 
//  let lastName="Chandran"

// console.log(firstName.length)

//  console.log(firstName.charAt(1))

//  console.log(firstName.concat(lastName))

//  console.log(firstName.includes("A"))
// console.log(firstName.includes("ar"))
// console.log(firstName.includes("Ar"))


//  console.log(firstName.startsWith("A"))

// console.log(firstName.endsWith('H'))


//  console.log(firstName.indexOf('R'))

//  console.log(firstName.repeat(10))

//  console.log(firstName.replace('Arish','Harish'))
// 
// console.log(firstName)

// console.log(firstName.slice(1,4))

// let summa="vanakam makkale" 

// console.log(summa.split(',',))

// console.log(summa.slice())


// console.log(firstName.toUpperCase())

// console.log(firstName.toLowerCase())


// let message="hello everybody"

// console.log(message);

// console.log(message.trim())

// console.log(message.trimStart());
// console.log(message.trimEnd());

// console.log(message.lastIndexOf('a'));

  
// Array methods

// let movies=['leo','japan','jawan','jailer']

// let marks=[85,96,97,89,90]

// console.log(movies.length)


// console.log(movies.push('Monkey Man'))

// console.log(movies)

// console.log(movies.unshift('Mad max fury'))

// console.log(movies)

//splice

// start parameter
// 2nd delete count parameter
// 3 rd add the values

// let movies=['leo','japan','jawan','jailer','aveshsam','munjumal boys']

// console.log(movies)

// movies.splice(4,0,'Mad Max')


// console.log(movies)
  

// const fruits=['Apple','Orange','mango']

// console.log(fruits.indexOf("Melon"))

// console.log(fruits.lastIndexOf('mango'))

// console.log(fruits.includes("Apple"))

//reference type

// const order=[
//   {id:1,item:'Orange',quantity:1},
//   {id:2,item:'Apple',quantity:3}
// ]

// console.log(order.includes({id:1,item:'Orange',quantity:1}))

// let result=order.find(function(value,index,obj){
//  return value.item==='orange'
// })

// console.log(result)


//remove elements

let num=[0,1,2,3,4,5]

// console.log(num.pop())

// console.log(num.shift())

// console.log(num)

// console.log(num.splice(3,1))

// console.log(num)

//empty array

// num=[]

// console.log(num.length=0)

// console.log(num.splice(0,num.length))

// console.log(num)

//Combine

// const food=['briyani','meals','dosai']
 
// const fruits=[{item:"apple"}] 

// let result=food.concat(fruits)
// console.log(result);

// let a=[...food,...fruits,100,200]
// console.log(a);

// a[0]='idly'

// a[3].item="Orange"

// console.log(a)

//iterating an Array

// const fruits=['watermelon','banana','muskmelon']

// for(let fruit of fruits){
//   console.log(fruit)
// }


// fruits.forEach((val)=>{
//   console.log(val)
// })

//  let fruit=fruits.join('s ')

// console.log(fruit);

//sorting in array

// const student=[5,8,7,3,6]

// let example=[12,4,6,22,35,13]
//4,6,12,22,35

// console.log(example.sort())

// let result=student.sort((a,b)=>{
//   return b -a
// })

// console.log(result)

// student.reverse()

// console.log(student)


//refernce type


// const students=[
// {id:8,name:"Abigal"},
// {id:5,name:"Paapathi"},
// {id:6,name:"Nithya"},
// {id:4,name:"Keerthana"},
// {id:3,name:"Yaseen"},
// ]


// students.sort(function(a,b){
//   // a<b -1
//   if(a.name<b.name) return -1
//   // a>b 1
//   if(a.name>b.name)  return 1

//   return 0

// })

// console.log(students);

// Testing in Test

// const age=[17,18,19,20,30]

// //every

// let vote=age.every((val)=>{
//   return val >=18
// })

// console.log(vote) 

// // some

// let vote1=age.some((val)=>{
//  return val >=18
// })

// console.log(vote1)

//refernce type

// const items=[
//   {id:1,name:'mobille',isDeliverable:false},
//   {id:2,name:'tv',isDeliverable:true},
//   {id:3,name:'accessories',isDeliverable:false},
//   {id:4,name:'washingmachine',isDeliverable:true}
// ]

// let allDeliverables=items.some((val)=>{
//  return val.isDeliverable===true
// })

// let notDelivreables=items.every((val)=>{
//   return val.isDeliverable===true
// })


// console.log('AllDeliverables',allDeliverables);

// console.log('NotDeliveables',notDelivreables);


//filter in Array

// const age=[16,17,18,19,20,15,25,23]

// let fill=age.filter((val)=>{
//   return val<=18
// })

// console.log(fill);


// const mobiles=[
// {id:1,brand:'iphone',cost:20000,ram:'8gb'},
// {id:2,brand:'samsang',cost:15000,ram:'8gb'},
// {id:3,brand:'redmi',cost:10000,ram:'4gb'},
// {id:4,brand:'iphone',cost:40000,ram:'8gb'},
// {id:5,brand:'samsang',cost:20000,ram:'8gb'},
// {id:6,brand:'redmi',cost:25000,ram:'4gb'}
// ]

// let fill=mobiles.filter((val)=>{
// return val.ram==='8gb'
// })

// console.log(fill);

//find array

// let arr=[15,18,19,20,24]

// let vall=arr.find(function(val){
//   return val>=18
// })
// console.log(vall)


// const mobiles=[
// {id:1,brand:'iphone',cost:20000,ram:'8gb'},
// {id:2,brand:'samsang',cost:15000,ram:'8gb'},
// {id:3,brand:'redmi',cost:10000,ram:'4gb'},
// {id:4,brand:'iphone',cost:40000,ram:'8gb'},
// {id:5,brand:'samsang',cost:20000,ram:'8gb'},
// {id:6,brand:'redmi',cost:25000,ram:'4gb'}
// ]

//   let result1=mobiles.find(function(val){
//      return val.brand==='redmi'
//   })

//   console.log(result1);

//map

// const num1=[1,2,3,4,5]

// let result=num1.map((val)=>{
//   return val*2
// })

// console.log(result)


// const person=[
//   {id:1,first_Name:'Pap',last_Name:"pathi"},
//   {id:2,first_Name:'Nith',last_Name:"ya"},
//   {id:3,first_Name:'Abigail',last_Name:"Melody"},
//   {id:4,first_Name:'yas',last_Name:"een"},
//   {id:5,first_Name:'Keer',last_Name:"thana"},
// ]
// console.log(person)

// let result=person.map((val)=>{
//    // {id:1,fullName:"pappathi"}

//    let fullName=[val.first_Name,val.last_Name].join('')
//    let obj={id:val.id,fullName} //{id:1,fullName:"pappathi"}

//    return obj

// })

// console.log(result);

//reduce 

// const nums=[45,85,25,75,66,45]

// console.log(nums)


// let result=nums.reduce((previousVal,currentVal)=>{

//   console.log("previousVal",previousVal)
//   console.log('currentVal',currentVal);

//   return previousVal+currentVal

// })

// console.log(result)

// let cart=[
//   {id:1,item:"biscuits",cost:20},
//   {id:2,item:"bread",cost:30},
//   {id:3,item:"maggi",cost:12},
// ]

//  let totalAmt=cart.reduce((previousVal,currentVal)=>{
//    console.log(previousVal)
//    console.log(currentVal)
   
//    return previousVal+currentVal.cost

// },100)


// console.log(totalAmt);

// base ascii

// let nums=[34,4,65,12,78]
// // 4,12,34,65,78

// let result=nums.sort()

// console.log(result)



// console.log('12'.charCodeAt())

// console.log('34'.charCodeAt())

// console.log('4'.charCodeAt())

// console.log('65'.charCodeAt())

// console.log('78'.charCodeAt())


 
// let products=[
//   {id:1,title:'Andorid phone',cost:20000},
//   {id:2,title:'Laptop',cost:50000},
//   {id:3,title:'Iphone',cost:75000},
//   {id:4,title:'Headphones',cost:3000},
// ]


//sort title asscending  =result

// filter products less 20000  =result.map[{id:1,title:'Android phone',cost:₹20000}]
                                                                      
// map andriodphone ₹ 20000 


// let result=products.sort(function(a,b){
// return a.cost-b.cost
// })

// let result1=result.sort(function(a,b){
//   if(a.title<b.title) return -1
//   if(a.title>b.title)  return 1
//   if(a.title===b.title) return 0

// })
// let result2=result1.filter(function(val){
//   return val.cost<=20000
// })

// let final=result2.map(function(val){
//   return val.title +"₹"+val.cost
// })
// console.log(final)



// let final1 =products.sort((a,b)=>{
//   return a.cost-b.cost
// }).sort((a,b)=>{

// if(a.title<b.title) return-1

// if(a.title>b.title) return 1

// if(a.title===b.title) return 0

// }).filter(val=>
//    val.cost<20000

// ).map(val=>
//   val.title +"-₹"+val.cost
// )
// console.log(final1)


// //last element
// let mark=[12,25,85,98,85]

// console.log(mark[mark.length-1])

// // mix of int and string

// //2d Array


// let matrix=[[1,2,3],[4,5,6],[7,8,9]]

// console.log(matrix[1][2])


// //  Array method

// let array=['a','b','c','d','e','f']
// console.log(array);

// array.push("g")
// console.log(array);

// //pop -remove elements from the end

// console.log(array.pop());

// shift -remove the elements  form start of the array
//return remove values

// console.log(array.shift());
// console.log(array);

//unshift -add new elemrnts to the start of the array
// return new lenght

// console.log(array.unshift('v'));
// console.log(array);

//splice

// 1st parameter --staring parameter
//2st parameter--mo.of elements to be delted from starting index
//3rd (or more)parameter-valyse to insert from starting index 
// deleteing two elements starting at index


// array.splice(1,2)
// console.log(array);

// //replace -delete elements at index 1 and insrets 'v'
// array.splice(2,2,'v')
// console.log(array);

// //delete elements at inde 1 and inserts 'x','y'
// array.splice(2,2,'v','i')
// console.log(array);//4 index

// array.splice(1,0,'e')
// console.log(array);

 //slice (starting index,ending index)
 //ending index not included
//  console.log(array);
//  console.log(array.slice(2,4));

 //reverse
//  array.reverse()
//  console.log(array);

 //join - converts array to string

//  let str=array.join()
//  console.log(str);

 //split - converts string to array
//  let str3="g,i,v,e"
//   let arr=str3.split(',')
//   console.log(arr);
   

// let name ="sneha"
// let name2="janai"


//  janai and sneha  we are best friends
// console.log(name +"and"+name2+"we are best friends");

// console.log(name,"and ",name2,"we are best friends");

// console.log(`${name} and ${name2}  we are best friends`);
//   //concat and  spread operator
  // let firstArr=[1,2,3]
  // let secondArr=[4,5,6];

  // let joinedArr=[firstArr,secondArr]
  // console.log(joinedArr);


  // joinedArr=firstArr.concat(secondArr)
  // console.log(joinedArr);   
  

  // let joined=[...firstArr,...secondArr]
  // console.log(joined);


  ///math object
  

// console.log(Math.PI)
// console.log(Math.abs(-10))
// console.log(Math.ceil(5.1))
// console.log(Math.random())

// console.log(Math.round(5.5))

// console.log(Math.max(45,85,45,96))
// console.log(Math.min(21,85,6,42))

//OOP

// Class is a template of properties and methods

// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   login(){
//     console.log(`my name is ${this.name} and age is ${this.age}`)
//   }
// }

// let user=new Person('Arish',23)
// let user1=new Person('vive',20)

// user.login()
// user1.login()


// class Person{    //parent class ,base class
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   login(){
//    console.log(`hi name is ${this.name} and age is ${this.age}`);
//   }

//   logout(){
//     console.log(`${this.name} you are logged out`)
//   }
// }

// let user=new Person('Arish',22)
// let user2=new Person('premnath',22)
// let user3=new Person('muthuvel',22)

// user.login()
// user2.login()
// user3.login()
// user.logout()
// user2.logout()
// user3.logout()


// class Person2 extends Person{  //child class,derived class
// constructor(name,age,city){
// super()
// this.name=name
// this.age=age
// this.city=city
// }

//   address(){
//     console.log(`my name is ${this.name} and age${this.age} is city ${this.city}`);
//   }
//   login(){
//     console.log(`hi hello `)
//   }

// }

// let user=new Person2('Arish',23,'Theni')
// user.address()
// user.login()

//static variable

// class Person{

//   static numberOfUser=0

//   constructor(name,age){
//     this.name=name
//     this.age=age
//     Person.numberOfUser++
//   }
//   login(){
//     console.log(`my name is ${this.name} and age is ${this.age}`)
//   }

//   logout(){
//     console.log(`${this.name} you are logout `)
//   }

//   static displayTotalUser(){
//     console.log(`number of user:${Person.numberOfUser}`);
//   }

// }

// let user=new Person("Arish",23)
// let user1=new Person("prem",23)
// let user2=new Person('muthu',25)

// user.login()
// user.logout() 
// user1.login()
// user1.logout()
// user2.login()
// user2.logout()
// Person.displayTotalUser()


//prototype

// // function User(name,age) {
// //   this.name=name;
// //   this.age=age;
// // }
// // User.prototype.login=function(){
// //   console.log('hi',this.name);
// //   console.log('you are logged in');
// // }

// // let user1=new User('comali',22)     
// // user1.login()


// //get and set

// class Temperature{
// constructor(temp1){
//   this.temp2=temp1
// }
// get temp(){
//  return this.temp2
// }

// set temp(para){
//   if(para > 100)
//     para=100
//   this.temp2=para
// }
// }
// let temp2=new Temperature(200)
// temp2.temp=110
// console.log(temp2.temp)

// let student={

// }


//modulas 

 let a=10 

class Display{  
  show(){  
      console.log("Hello World :)");  
  }  
}  

function javaT(){  
  console.log("Welcome to javaScript") 
} 


export{a,javaT,Display}


//Synchronous

// blocking of code

// let a=10
// console.log(a) 

// let b=20
// console.log(b)

// const c=30
// console.log(c)

// c=35  //imps    // 1hr  wait   
// console.log(c) //jump

// let d=40  
// console.log(d)

// let e=50 
// console.log(e)


//Asynchronous

//non blocking of code

// console.log('hello')  //f1

// function sync(){
// console.log('step1') //f3
// console.log('step2') //f4
// console.log('step3') //f5
// }

// sync() //f2

// setTimeout(()=>{console.log('step1')},4000)  //f6   
// setTimeout(()=>{console.log('step2')},3000)  //f7   
// setTimeout(()=>{console.log('step3')},2000)  //f8   
// setTimeout(()=>{console.log('step4')},1000)  //f9  

// console.log('bye') //f10

// for(let i=0;i<=100000;i++){
//   console.log(i)
// }
 

//promise

// promise is object
// its used for asynchronus method

//Api   promise  // fullfield ,reject ,pending

// function tatkalBook(){
//   return  new Promise((reslove,reject)=>{

//     let bookingSuccuess=false   

//     if(bookingSuccuess)
//      reslove(850)
    
//     else 
//     reject()
// })

// }

// tatkalBook().then((amt)=>{console.log(`Thanks da  i will tranfer amount ${amt}`)})

// .catch(()=>{console.log('Thanks for trying Da')})


 
// function  tossCoin(){
//   return new Promise((reslove,reject)=>{
//       let rand=Math.floor(Math.random()*2)

//       if(rand ==0)
//       reslove()
//       else
//       reject()

//   })
// }

// tossCoin().then(()=>{console.log('its head')})
// .catch(()=>console.log('its tails'))


// let reachA=new Promise((reslove,reject)=>{
//   let reached=true
//   if(reached){
//   setTimeout(reslove,5000,'Prem reached')
//   }
//   else
//   reject('Prem not reached')
// })


// let reachB=new Promise((reslove,reject)=>{
//   const reached =true
//   if (reached){
//     setTimeout(reslove,4000,'Janai reached')
//   }
//   else
//   {
//     reject('Janai not reached')
//   }
// })

// let reachC=new Promise((reslove,reject)=>{
//   const reached =true
//   if (reached){
//     setTimeout(reslove,3000,'Dhanalakshmi reached')
//   }
//   else
//   {
//     reject(' dhanalakshmi not reached')
//   }
// })

// let reachD=new Promise((reslove,reject)=>{
//   const reached =false
//   if (reached){
//     setTimeout(reslove,2000,'subbuLakshmi reached')
//   }
//   else
//   {
//     reject('subbulakshmi not reached')
//   }
// })

// let reachE=new Promise((reslove,reject)=>{
//   const reached =true
//   if (reached){
//     setTimeout(reslove,1000,'maheshwari reached')
//   }
//   else
//   {
//     reject('maheshwari not reached')
//   }
// })

// let reachF=new Promise((reslove,reject)=>{
//   const reached =false
//   if (reached){
//     setTimeout(reslove,500,'Naveen reached')
//   }
//   else
//   {
//     reject('Naveen  not reached')
//   }
// })


// Promise.all([reachA,reachB,reachC,reachD,reachE,reachF])
// .then((msg)=>{console.log(msg)})
// .catch((msg)=>{console.log(msg)})


// Promise.allSettled([reachA,reachB,reachC,reachD,reachE,reachF])
// .then((msg)=>{console.log(msg)})
// .catch((msg)=>{console.log(msg)})


// Promise.any([reachA,reachB,reachC,reachD,reachE,reachF])
// .then((msg)=>{console.log(msg)})
// .catch((msg)=>{console.log(msg)})

// Promise.race([reachA,reachB,reachC,reachD,reachE,reachF])
// .then((msg)=>{console.log(msg)})
// .catch((msg)=>{console.log(msg)})


// expection handling

// try{
//   let num=prompt('enter a number')

//   if(num==='')
//   throw 'cannot be emepty'
  
//   if(isNaN(num))
//   throw 'enter a vaild number'

//   console.log(num**2)
// }
// catch(err){
//   console.log(err);
// }

// finally{
//   console.log('bye')
// }


//Async Await

//async return promise

//  async function fn(){
//   return 'hello'
// }
// console.log(fn())


// async await

// async return promsie

// async function asyncStaus(){
//   try{
//     console.log('hi')
//     let res=  await reachA
//     console.log(res)
//     console.log('bye')
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// asyncStaus()



//json

// let json1='Dave'
// let json2=22
//  let json3={
//   "stock":"tcs",
//   "price":"3500"
// }

// console.log(json3);

// let json4=`[
//   {
//     "stock":"tcs",
//     "price":"3500"
//   },
//   {
//     "stock":"hcl",
//     "price":"4500" 
//   },

//   {
//     "stock":"sbi",
//     "price":"4500" 
//   }
// ]`
// console.log(json4)

// let paresed=JSON.parse(json4)

// console.log(paresed)

// let str=JSON.stringify(paresed)

// console.log(str)


//API




// fetch('https://official-joke-api.appspot.com/jokes/programming/random')

// .then((result)=> result.json())
// .then((msg)=>console.log(msg[0].punchline,msg[0].setup,msg[0].id


// fetch("https://api.disneyapi.dev/character")
// .then((res)=>res.json())
// .then((msg)=>{msg.data.forEach((character,index)=>{
//   console.log(`${index} character Name:${character.name} `)
//   character.films.forEach((film)=>{
//     console.log(film)
//   })

// })})


  // .then((res)=>res.json())
  // .then((msg)=>{for(let character of msg.data){
  //   console.log('character Name:',character.name)
  //   for(let film of character.films){
  //     console.log('Film name:',film);
  //   }
  // }})


//global vs local
// {
// let userName="hello"
// }
//  console.log(userName);

// if (true){
//   let name="kalai" 
//   console.log(name);
// }
// console.log(name);


// let userName="kavya"

// function greet(){
// let userName="kalai"
//  let message="hello"+userName
//  log(message)
// }
// function log(message){
//   console.log(message);
// }
// greet()

// console.log(userName);



// var color="white"
// let car="volvo"

// color2="green"


//let block scope
//var function scope

// let name="arish"
// console.log(name);


// geter and seter

// let student={
//   firstName:'Arish',   //data properties
//   lastName:'Chandran',
//   get fullName(){
//     return `${this.firstName}${this.lastName}`
//    },
//    set fullName(val){
//     let values=val.split(' ')
//     this.firstName=values[0]
//     this.lastName=values[1]
//    }
  
// }
// student.firstName='vive'

// student.fullName='Arish Chandran'
// student.fullName='muthu vel'   


// console.log(student.firstName);
// console.log(student.fullName);

// array Destructuring


// let [physics,chemistry,maths]=[50,70,90] //phy chem maths

// console.log('physics',physics)
// console.log('chemistry',chemistry)
// console.log('maths',maths)


//undefined element

// const[physics,chemistry,maths]=[50,70] 

// console.log(physics,chemistry,maths)

// skip element

// const [physics,,maths]=[50,70,80] 

// console.log(physics,maths)

// Discarding extra element

// const [physics,chemistry]=[50,70] 

//defalult value

// let[name1='Arish',age=23]=['vive']

// console.log(name1,age)

//rest syntax

// let [one,two,three,...remain]=[1,2,3,4,5,6]

// console.log(one,two,three,remain)

//nested

// let [one,two,[three,four],five,six]=[1,2,[3,4],5,6]

// console.log(one,two,three,four,five,six)


//function

// function fullName(){
//   return ['Arish','vive']
// }

// let [he,she]=fullName()

// console.log(he,she)


//loop

// const myTeam=[['arish','arish18@gmail.com'],['vive','vive18@gmail.com']]

// for(let [name,mail] of myTeam){
//   console.log(mail)
// }


// let person={
//   name:'arish',
//   age:23
// }

// console.log(age)


// let {name,age}={name:'Arish',age:23}

// console.log(age)

// console.log(a);

// var a=10

// console.log(b);

// let b=20

// console.log(ab());

// var ab=function(){
//   return 1
// }


// const mekeError=()=>{
// try{
//   const name='Arish',
//   name='vive'
// }
// catch(err){
//   console.log(err.name);
// }
// }

// mekeError()




