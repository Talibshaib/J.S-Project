//     function add(num1 , num2){
//    return num1+num2;

// }
// function multi(num1, num2){
//     return num1*num2;

// }
// function cal(num1,num2, operator){
// return operator(num1, num2);
// }

// let contain = document.querySelector("#container")

// let request = new XMLHttpRequest();
// request.open('GET')

// GET https://icanhazdadjoke.com/

// let int = document.querySelector("#onbutt");

// let clicker = () => {
//   console.log("hey how are you");
// };

// let mount = int.addEventListener("click", clicker);

// let but = document.querySelector('#onbutt')
// let clicker = but.addEventListener("click",function(){
//     document.querySelector('.bulb').src ="./resorce/off.jpg";
// })

// let clicked = function(){
//     document.getElementsByClassName('bulb').src = ''

// }

// let getter = but.addEventListener('click', clicked)

// let func = () =>{
// return "Hello world"

// }

// let tempload = () => {
//   let temp = document.querySelector("#fn");
//   temp.innerHTML = "\u{1F601}";
//   document.getElementById("contain").style.backgroundColor = "#86A789";

//   setTimeout(() => {
//     temp.innerHTML = "\u{1F44D}";
//     document.getElementById("contain").style.backgroundColor = "#B2C8BA";
//   }, 1000);

//   setTimeout(() => {
//     temp.innerHTML = "\u{1F60D}";
//     document.getElementById("contain").style.backgroundColor = "#D2E3C8";
//   }, 2000);

//   setTimeout(() => {
//     temp.innerHTML = "\u{2764}";
//     document.getElementById("contain").style.backgroundColor = "#EBF3E8";
//   }, 3000);

//   setTimeout(() => {
//     temp.innerHTML = "\u{1F60F}";
//     document.getElementById("contain").style.backgroundColor = none;

//   }, 4000);
// };

// tempload();

// setInterval(tempload, 5000);
// let num =["its you", "its nothing ", "why "];
// let myobj ={
//     uname : "phalana",
//     rollno:"56",
//     mail: "mdtalib23038@gmail.com"

// }
// let conNum =Number(num);
// console.log(typeof myobj.rollno)

// console.log(conNum)

// let num =Math.random();

// let num2 =Math.floor((num*6) +1)

// console.log(num2);

// let num2 = num.toString()
// console.log(num2.length);

// let myArry = [3, 1, 5, 4, 7, 6, 8, 9];

// console.log(myArry.reverse());

// console.log(myArry.reverse());
// myArry.push(6,10,34,90,"fuck u",true,6.646);

// let arry1 = myArry.pop()
// let arry2 = myArry.pop()
// let arry3 = myArry.pop()
// let arry4 = myArry.pop()
// let arry5 = myArry.unshift(7)

// let arry6 = myArry.join();
// myArry.indexOf(774786)

// console.log(myArry.splice(2, 4))

// console.log(myArry);
// console.log(newarr);
// console.log(arry6);

// console.log(arry1);
// console.log(arry2);
// console.log(arry3);
// console.log(arry4);
// console.log(arry5);

// +++++++++++++++++++++Object++++++++++++++++++++++

// let myobj = {
//   name: "talib",
//   rollNo: 28,
//   email: "md atlib23@google.com",
//   //   sym: new Symbol("pen"),
//   isLogin: false,
//   prsentation: ["monday", "tuesday", "thursday"],
// };
// let obj2 = {
//   this: 6,
//   that: 5,
// };
// let obj4 = {
//   nmae: "kamal",
//   fathername: "ramlal",
// };
// console.log(myobj["prsentation"]);
// myobj.email= "kartioke@gmail.com"

// console.log(myobj["email"]);
// Object.freeze(myobj)
// myobj.name ="kartike"

// console.log(myobj["name"]);
// myobj.greating = function () {
//   console.log("hey den");
// };
// myobj.greatingtwo = function () {
//   console.log(`hey den ${this.name}`);
// };

// console.log(myobj.greating());
// console.log(myobj.greatingtwo());
// let obj3 = {
//   ...obj2,
//   ...myobj,...obj4
// };
// console.log(obj3);

// ++++++++++++++Function++++++++++++

// let objagain = {
//   name: "talib",
//   class: 10,
// };

// function grttingobj(newobj) {
//   return `this is your name ${newobj.name} and this is your class ${newobj.class}`;
// }

// console.log(grttingobj(objagain));

// =>same we can do with arry

// +++++++++++++++++Scope+++++++++++++++++

// function mydcope(){
//   let a =10;
//   const b =20;
//   var c = 30;
// }
// if(true){
//   let a =10;
//   const b =20;
//   var c = 30;
// }
//drawback of var is it is comeout inside the block scope

// console.log(a);
// console.log(b);
// console.log(c);

// for (let i=1  ; i<10;i++){
// console.log(i)
// }

// let i = 120;
// console.log(i);
//++++++++++++Nesting+++++++++++++
// function one() {
//   const name = "danish";
//   function two() {
//     const mobno = 7463052311;
//     // console.log(mobno);
//     return mobno;
//   }

//   console.log(two());
//   return name;
// }
// console.log(one());

//++++++++++increament No by One+++++++++++

// let getbtn = document.getElementById("btn")
// let getpra = document.getElementById("fn")
// let changespn = 0;
// getbtn.addEventListener("click", incbtn)
// function incbtn( ){
//     changespn++ ;
//     getpra.innerHTML = changespn;

// }

//++++++++ function +++++++++++++++++++++
// console.log(one()); +++++ it give return +++++++
// function one() {
//     let fname = "talib";
//     return fname;
// }

// let one = function () {
//   let name = "talib";
//   return name;
// };

// let one = ()=>{
//     let name = "manish"
//     return name;
// }
// console.log(one());

// let myobj = {
//   name: "danish",
//   mail: "kartik23038@gmail.com",

//   callingname: function () {
//     console.log(this.name);
//     console.log(this);
//   },
// };
// console.log(myobj.callingname());
// myobj.name = "talib";
// console.log(myobj.callingname());

// let add =(num3, num4) => (num3 + num4); //this is a type of defining a function

// console.log(add(8,4))

//+++++++++++IIFE (Function) ++++++++++++++++++++
// this is due to quick call and avoid the messedup with global varieble
//**** this is a type of declearing a function

// (function num() {
//   console.log(`API CALLED`);
// })();

// console.log(num());

// (() => {
//   console.log(`API CALLED`);
// })();

//****
// let num1 = 566;
// let newnum= num1 =560;
// console.log(newnum);

// console.log(typeof(num1));

//++++++++++ if else, nesting in if else , continue break starements ++++++++++
//+++++++++ falsy statement truly statement +++++++++++++++++
//+++++++++++ loops (for , while , do while , forof=> (arry , map ) ,forin  )
// let urobj = [9,8,7,65,4,3,2,1]
// let num = urobj.forEach(( ) => {
//   return item;
// });
// console.log(num);

// let tempreture = 260;

// if (tempreture>100){
//   (()=>{
//     let

//   })()

// }

// let book = [
//   {name : "book1", genera:"history", publish:1980, edition:2004},
//   {name : "book2", genera:"fiction", publish:1982, edition:2018},
//   {name : "book3", genera:"biography", publish:1988, edition:2014}
// ]
//++++++++++it is usea for filtering the arry ( it only return true value)+++++++++++++

// let newcollection = book.filter((bk)=> bk.publish >=1981 )

//  console.log(newcollection);

//+++++++++ .map (used for mainly to make operations on arry)++++++++++

// let newbook = book.map((bk)=> bk.name +" " + "sample" )

// console.log(newbook);

//++++++ reduce +++++++++++

// let cart = [230 , 450 , 200 ,360]
// let totalcost = cart.reduce((num1, num2)=> {
//   console.log(`num1 = ${num1} and num2 ${num2}`);
//   return num1+num2;
// },0)

// console.log(totalcost);

// let cont = document.querySelector(".un");
// console.log(cont.firstElementChild);

// for(let i = 0; i<cont.children.length; i++){
//     console.log(cont.children[i].innerHTML);

// }
//++++++++ creating an element +++++++++++++
// const div = document.createElement('div')
// div.setAttribute('class', 'main')
// div.setAttribute('id', 'maintain')
// div.setAttribute('title', 'maintain page')
// div.innerHTML="this is it";
// div.style.backgroundColor = "red";
// div.style.margin = "10px";
// document.body.appendChild(div)
// console.log(div);

// function addlanguage(lang){
//     let li = document.createElement('li');
//     li.className = 'li';
//     li.style.color ="green";
//     li.innerHTML= `${lang}`
//     let get = document.querySelector('.language');
//     get.appendChild(li);
//     console.log(li);

// };
// addlanguage("python")
// addlanguage("c++")
// addlanguage("c#")
// addlanguage("ruby")
// addlanguage("type script ")
// addlanguage("ruby ")
// addlanguage("dimond")
// addlanguage("black")
// addlanguage("c")
// addlanguage("java")

// //optimal code
// function addoptylanguage(lang){
//     let li= document.querySelector("")

// }
// addoptylanguage();

// editing element

// let makechanges = document.querySelector("li:nth-child(1)")
// // console.log(makechanges.innerHTML);
// makechanges.innerHTML="type script"

// const mobilePrice = [ 1, 2,3, 4, 5]

// const value = moilePrice.reduce((item,acc)=>{
//     console.log(`first value ${item} and second value ${ acc}`);

//    return item+ acc;
// } ,0)

// const ans = mobilePrice.map((num)=>{

//     return num+10;

// })
// console.log(ans)

// let att = [6,9,8,2,3,0,45,1];
// att.forof (item) ;{
//     return item

// };
let contain = document.querySelectorAll(".sp");
console.log(contain);
let body = document.querySelector("body");

contain.forEach((cl) => {
  cl.addEventListener("click", function (bt) {
    console.log(bt.target.id);

    if (bt.target.id === "red") {
      body.style.backgroundColor = 'red';
    //   console.log("red");
    }
    if (bt.target.id === "blue") {
      body.style.backgroundColor = 'blue';
    //   console.log("red");
    }
    if (bt.target.id === "purple") {
      body.style.backgroundColor = 'purple';
    //   console.log("red");
    }
    if (bt.target.id === "yellow") {
      body.style.backgroundColor = 'yellow';
    //   console.log("red");
    }
    if (bt.target.id === "grey") {
      body.style.backgroundColor = 'grey';
    //   console.log("red");
    }
  });
});





// let contain = document.querySelectorAll(".sp");
// console.log(contain);
// let body = document.querySelector("body");

// contain.forEach((cl) => {
//   cl.addEventListener("click", function(bt) {
//     console.log(bt.target.id)

//     if(bt.target.id === 'red'){
//       body.style.backgroundColor = bt.target.id;
//       console.log("red");
//     }
//   });
// });
