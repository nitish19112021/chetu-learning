  // higer order function:
  // 1. map()    2. filter()     3. sort()   4. reduce()
  // 5.call()    6. bind()       7. apply() find findindex



// higher order function are those function that will take a function as parameter means a callback function.
// higher order function are the function that accept function as parameter and returns a function.

/* var a = function sum(b){
    console.log("hello"+b)
}
a(3); */

//   function sing(callback){
//     console.log("la alala ");
//     callback()
// }

 /* function sing(callback){
    console.log("hello function");
    if(callback){
        callback()      ///error handling
    }
}  */

/*function sing(callback){
    console.log("hellow function");
    if(callback instanceof Function){
        callback()
    }
}
 
function check(){
    console.log("hellow callback function")
} */

//anonymous function
/* 
function sing(callback){
    console.log("hello funcgion")
    callback()
}

function setup(){
    sing(function(){
        console.log("hello callbcak function")
    })
} */


//////////closer

/* 
 function mulitplier(factor){
    return function(x){
        return x*factor;
    }
}

let doubler = mulitplier(2)
doubler(2);

let triple = mulitplier(3)
triple(3)
 
// arrow function

function multiplier(factor){
    return x=> x*factor
}

let double = multiplier(2)
double(2); */

const companies = [
    {name:'company one', category: "finance", start: 1985, end:2000},
    {name:'company two', category: "retail", start: 1992, end:2002},
    {name:'company three', category: "auto", start: 1987, end:2003},
    {name:'company four', category: "technology", start: 1984, end:2001},
    {name:'company five', category: "retail", start: 1994, end:2000},
    {name:'company six', category: "auto", start: 1980, end:2000},
    {name:'company seven', category: "technology", start: 1982, end:2000},
    {name:'company eight', category: "mechanical", start: 1996, end:2000},
    {name:'company nine', category: "auto", start: 1998, end:2000},
]

const ages = [12,45,14,21,25,23,58,54,12,28,5,32,41]



//for
    /* for(let i =0; i<companies.length;i++){
        console.log(companies[i].name);
    } */
//foreach
    /* companies.forEach(function(company){
        console.log(company.name);
    }) */

    // arrow function
    /* companies.forEach(company=>console.log(company.name)) */
//filter
    /* let candrink =[];

    for(let i = 0; i<ages.length;i++){
        if(ages[i]>=21){
            candrink.push(ages[i]);
        }
    }

    console.log(candrink) */


    /* const canDrink = ages.filter(function(age){
        if(age>=21){
            return true
        }
    })

    console.log(canDrink) */

    //arrow function

    /* const candrink = ages.filter(age=>age>=21)
    console.log(candrink) */

//filter the retail company

/* const retailcompanyies = companies.filter(function(company){
    if(company.category==='retail')
    {
        return true
    }
})

console.log(retailcompanyies); */

//arrow function

/* const retailcompanyies = companies.filter(company=>company.category==='retail')
console.log(retailcompanyies); */


/// find in which date company which is established after or equal to 1980

/* const establishdate = companies.filter(function(companydate){
    if(companydate.start>=1980){
        return true;
    }
}) */

//filter companyes those are established between 1980 and 1990

//By arrow function

/* const establishdate = companies.filter(company => company.start>=1980 && company.start<=1990)
console.log(establishdate)  //showing the list of the company
establishdate.forEach(check=>console.log(check.name));  //showing company name
 */

/// to get name of the company 

/* establishdate.forEach(function(check){
    console.log(check.name)
}) */

//getting name of company by arrow function

/* establishdate.forEach(check=>console.log(check.name)); */


//console.log(establishdate);

/* const datecompany= companies.filter(function(datec){
    if(datec.start>=1990){
        return true;
    }

})

datecompany.forEach(function(check){
    console.log(check.name)
})
 */

//map
/* for(let i=0; i<companies.length;i++){
    console.log(companies[i].name)
} */

 /* const companyname = companies.map(function(company){
 //   return company.name
//   if(true){
//      return company.name
//  } 

 //console.log(company.name)
})

console.log(companyname);   */

//arrow function

/* const companyname = companies.map(company => company.name)
console.log(companyname)
 */

 // use filter to find companies between 1980 to 1990 and find the company name by map methods
/* 
const companydate = companies.filter(function(company){
    if(company.start >= 1980 && company.start<=1990){
        return true;
    }
})
console.log(companydate)

const companyname = companydate.map(function(selectname){
    if(true){
        return selectname.name
    }
})
console.log(companyname) */
 //by Arrow function
/* const companydate = companies.filter(company=>company.start >=1980 && company.start<1990)
console.log(companydate);

const compnayname = companydate.map(findname=> findname.name)
console.log(compnayname);
 */
//find company name and with start date and end date

/*  const testmap = companies.map(function(name){  
     return `${name.name} : [start date: ${name.start} and enddate : ${name.end} ]`    
}) 
console.log(testmap)
 */

//arrow function
/* const testmap1 = companies.map(test=>`${test.name} :[start date ${test.start} and end date : ${test.end}]`)

console.log(testmap1) */

//square root and square of ages  by different map method

/* const squareroot = ages.map(sqr=>Math.sqrt(sqr))
const multiply = ages.map(multi => multi * 2);
console.log(squareroot)
console.log(multiply)

// square root and square of ages map of map method

const agemap = ages.map(sqr => Math.sqrt(sqr)).map(multi => multi*2) */


//sort

//assending sorting and decending sorting
 
//this is assending sorting
/* const sortedcompany = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1
    }else{
        return -1
    }
})
console.log(sortedcompany)  */

//decending sorting
/* const sortedcompany = companies.sort(function(c1,c2){
    if(c1<c2){
        return 1;
    }else{
        return -1
    }
})
console.log(sortedcompany);

 */
//arrow function 

/* const sortedcompany = companies.sort((c1,c2)=>{c1.start>c2.start?1:-1})
console.log(sortedcompany); */


//sort ages

/* const ageshort = ages.sort();
console.log(ageshort) */

/* const ageshort = ages.sort(function(a1,a2){
    if(a1>a2){
        return 1

    }
    else{ return -1}
})

console.log(ageshort) */

//reduce
/* const reducedate = companies.reduce(function(total,company){
    return total + (company.end -company.start)
},0)

console.log(reducedate)
 */

//combined higher order function togather

//task : lets multiply all ages by 2 and then filter above 40 and the sort assending order and then reduce.
/* 
console.log(ages)

const combined = ages
.map(sqt => sqt*2)
.filter(age=>age>=40)
.sort((a1,a2)=>a1>a2?1:-1)
.reduce((a,b)=> a+b,0)

console.log(combined) */

///call function
    // student constructor 
/*
function Student(firstname, lastname, subject){
    this.firstname = firstname;
    this.lastname = lastname;
    this.subject = subject;
    this.callfun = function()    {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

 const stud1 = new Student('john', 'doe');
stud1.callfun(); */
//call method takes the argument as string 
//apply method takes arguments as array

/* function Student(firstname, lastname, subject){
    this.firstname = firstname;
    this.lastname = lastname;
    this.subject = subject;
    
}

const callfun = function(prefix, suffix){
    console.log(`${prefix} ${this.firstname} ${this.lastname} ${suffix}`);
}
 const stud1 = new Student('john', 'doe'); */
//callfun.call(stud1, 'mr', 'hello');


//callfun.apply(stud1,['mr', 'hello']);

//bind function return a function 
/* 
var fn = callfun.bind(stud1)
console.log(fn)
fn("a","b")
 */


/* function  Studen(name, age){
    this.name = name;
    this.age = age;
    
}

const fun= function(pref,suf){
    return `${pref} ${this.name} ${this.age} ${suf}`
}

var stud = new Studen('johnnn','don')
console.log(fun.call(stud,'mr',"hel")) */
//console.log(fun())

//promise, error handling(try catch), sync await, fetch, ajax, higher order function, nodejs architecture

        //promise
// if promise has two stage 1. resolve 2. reject
// 1. when promise is resolve then() method is called
//2. when promise is resolve catch() method is called..

 */


/* function testFilter(testArr,obj){
 let isExist = testArr.filter(i=> i == obj.key);
if(isExist.length){
    return 'object exists at position';
}else{
    return 'Not exist'
}
}

let arr = [{key:'abc', val:5},{key:'bcd', val:15}];
let testObj = {key:'abc',val:5};
 console.log(testFilter(arr,testObj));
// console.log(testMap());

 */

/* function  Studen(name, age){
    this.name = name;
    this.age = age;
    
}

const fun= function(pref,suf){
    return `${pref} ${this.name} ${this.age} ${suf}`
}

var stud = new Studen('johnnn','don')
console.log(fun.call(stud,'mr',"hel")) */
//console.log(fun())

//promise, error handling(try catch), sync await, fetch, ajax, higher order function, nodejs architecture

        //promise
// if promise has two stage 1. resolve 2. reject
// 1. when promise is resolve then() method is called
//2. when promise is resolve catch() method is called..


//
/* var disp = document.getElementById('display').innerHTML;
console.log(disp);
 */
/* function f1(){
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById('num2').value);
var num3=num1+num2;
console.log("hello"+num3) 
} */
//if we do this we get all element and its text which is inside the tag
//we have a tag <p> and we want to access the value of this then use innerHTML
//
/* 
var obj ={
    fname : 'nitish',
    lname: "chauhan"
}

console.log(obj.fname +" "+obj.lname);

var obj = {
    fname:'sams',
    lname:'colvin'
}

console.log(obj.fname+" "+obj.lname) */


//constructor
//if we have hundrend preson then we to make hundred objects

// so the solution is constructor..

/* 
function Person(fn,ln){
    this.fn = fn,
    this.ln = ln,
    this.fullname = function(){
        return this.fn +" "+this.ln
    }
}



obj1 = new Person("nitish","chauhan")
console.log(obj1.fullname())

obj2 = new Person("mohit", "chauhan")
console.log(obj2.fn+" " +obj2.ln)

 */
//prototype : we we make a function constuctor and we want to update the object the use prototype.

// suppose we are working on real projects and 


/* function Person(fn,ln){
    this.fname = fn;
    this.lname = ln,
    this.fullname = function(){
        return this.fname +" "+this.lname;
    }
}
Person.prototype.age = 12;
var obj = new Person("nitish","chauhan")
var obj1 =new Person('mohit' ,"chauhan")
console.log(obj.age)
console.log(obj1) */


//var disp = document.getElementById('display').innerHTML;
//console.log(document)
// console.log(document.all)
//console.log(document.head)

//console.log(disp.siblingchild)
//var disp = document.getElementsByTagName('p')
//var disp = document.getElementById('display')

//
/* var disp = document.getElementById('display').innerHTML;
console.log(disp);
 */
/* function f1(){
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById('num2').value);
var num3=num1+num2;
console.log("hello"+num3) 
} */
//if we do this we get all element and its text which is inside the tag
//we have a tag <p> and we want to access the value of this then use innerHTML
//
/* 
var obj ={
    fname : 'nitish',
    lname: "chauhan"
}

console.log(obj.fname +" "+obj.lname);

var obj = {
    fname:'sams',
    lname:'colvin'
}

console.log(obj.fname+" "+obj.lname) */


//constructor
//if we have hundrend preson then we to make hundred objects

// so the solution is constructor..

/* 
function Person(fn,ln){
    this.fn = fn,
    this.ln = ln,
    this.fullname = function(){
        return this.fn +" "+this.ln
    }
}



obj1 = new Person("nitish","chauhan")
console.log(obj1.fullname())

obj2 = new Person("mohit", "chauhan")
console.log(obj2.fn+" " +obj2.ln)

 */
//prototype : we we make a function constuctor and we want to update the object the use prototype.

//query selector

//var disp = document.querySelector('#display')
// var disp = document.querySelector('.disp')
// console.log(disp.children[0])

//create and append element

/* var myul = document.getElementById("disp");
//console.log(myul)
var newli = document.createElement('li')
//console.log(newli)
let litext = document.createTextNode('bhavesh');
//console.log(litext)
newli.appendChild(litext)
//myul.appendChild(newli) */

/* let myli = document.getElementById('disp');
let newli = document.createElement('li');
//console.log(newli);
let textnode = document.createTextNode('inssi');
newli.appendChild(textnode)
myli.appendChild(newli) */


//create append and create text node and add text by button
/* function addElem(){
 
    let myli = document.getElementById('disp');
    let newli = document.createElement('li');
    let textnode = document.createTextNode("ram")
    newli.appendChild(textnode)
    myli.appendChild(newli)
    
} */

//insert li by text box by clicking on button
/* 
 function addElem(){
    
    let myli = document.getElementById('disp');
    myli.className = 'new_li'                               // add class name in ul
    let newli = document.createElement('li');
    newli.className = 'new_li abc'                            //add classname in li                  
    let mytext = document.getElementById('disptext').value;
    let textnode = document.createTextNode(mytext)
    newli.appendChild(textnode)
    myli.appendChild(newli)
    document.getElementById('disptext').value = " "
}
 
 */


//add list element without append method...
//use textcontent
/* 
function addElem(){
    
    let myli = document.getElementById('disp');
    myli.className = 'new_li'                               // add class name in ul
    let newli = document.createElement('li');
    // newli.className = 'new_li abc'                            //add classname in li                  
    newli.textContent = document.getElementById('disptext').value
    myli.appendChild(newli)
    document.getElementById('disptext').value = " "
} */
 

//remove element

//document.body.removeChild(document.getElementById('box'));

/* var boxElement = document.getElementById('box');
// var libox = boxElement.firstElementChild;
// var libox = boxElement.firstElementChild.nextElementSibling;
var libox = document.getElementById('li1');  //to remove particular id
boxElement.removeChild(libox)

 */




/* let box = document.getElementById('box')
let li = document.createElement('li')
li.firstElementChild.textContent= 'ramesh';
box.appendChild(li)
 */
/* function f1(){

let box = document.getElementById('box')
let newli = document.createElement('li')

let name = document.getElementById('name').value;
let text = document.createTextNode(name);

newli.append(text)
box.append(newli);

document.getElementById('name').value=" ";
}

 */

//document.body.removeChild(document.getElementById('box'))
//event listner:




// by event listner we can perform two or more events(function) on same btn

/* let btn = document.getElementById('btn');
 btn.addEventListener('click',f1)
 console.log(btn.getAttribute('class'))
 btn.addEventListener('click',f2)

function f1(){
    console.log('first event...');
    let btn = document.getElementById('btn')
    btn.removeEventListener('click',f1)
}
function f2(){
    console.log('second event...')
} */


//replace clild
/* 
let myul = document.getElementById('disp');
let pos = myul.firstElementChild;
// let pos = document.getElementById('first')
let li = document.createElement('li');
li.textContent = 'abc'
myul.replaceChild(li,pos)
 */


//to do list

/*  function addMore(){
    let name = document.getElementById('name').value;
    document.getElementById('error').innerHTML = ''
    if(name==''){
        document.getElementById('error').innerHTML = "Please Enter the name"
    }else{
        let mybox = document.getElementById('box');
        let myli = document.createElement('li');
        
        myli.textContent = name;

        let a = document.createElement("a");
        a.textContent="x";
        a.href='javascript:void(0)';
        a.className ="link"
        myli.append(a)
        
        let pos = mybox.firstElementChild;
        // console.log(pos)
        if(pos==null){
            mybox.append(myli)
        }else{
            mybox.insertBefore(myli,pos)
        }

        // mybox.insertBefore(li,pos)
        // mybox.append(myli)
        document.getElementById('name').value = ""
    }
}


let btn = document.querySelector('ul')
btn.addEventListener('click', function(e){
     let box = document.getElementById('box');
    let myli = e.target.parentNode;
    box.removeChild(myli)
})
 */

/* let btn = document.querySelector('ul');
// console.log(btn)
btn.addEventListener('click',function(e){
    let box = document.getElementById('box');
    //let myli = e.target;
     let myli = e.target.parentNode;
    // console.log(myli)
    box.removeChild(myli)
})
 */

// Date program by javascirpt
 
/* function checkTime(){ 
    let d = new Date();
    let day = d.getDay()

        switch(day){
            case 0:
                day = "sunday";
                break;
            case 1:
                day="Monday";
                break
            case 2:
                day= "Tuesday"
                break
            case 3:
                day="Wednesday"
                break
            case 4:
                day="Thursday"
                break
            case 5:
                day="Friday";
                break;
            case 6:
                day ="Saturday";
}
            let date = d.getDate();
            let m = d.getMinutes();
            let s = d.getSeconds();
             document.getElementById('disp').innerHTML = day+":"+date +":"+ m +":" + s
             setTimeout(checkTime,1000);  
}
checkTime() */ 

//display date 

/* function showclock(){
    let d= new Date();
    document.getElementById('disp').innerHTML = d.toLocaleTimeString()      
}
setInterval(showclock,1000); */


//curd operaton

let id="";
// localStorage.clear();
function manageData(){
    let name = document.getElementById('name').value;
    if(name==''){
        document.getElementById('msg').innerHTML = "Please Enter Name";

    }
    else{
        var disp = document.getElementById('root');
        var tr = document.createElement('tr');
        
        var td=document.createElement('td')
        td.textContent = name
        tr.appendChild(td)
        disp.appendChild(tr)
    }

}
function selectData(){

}

function editData(){

}

function deleteData(){

}
