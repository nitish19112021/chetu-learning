  // higer order function:

// higher order function are those function that will take a function as parameter means a callback function.
// higher order function are the function that accept function as parameter and returns a function.

var a = function sum(b){
    console.log("hello"+b)
}
a(3);

/* function sing(callback){
    console.log("la alala ");
    callback()
} */

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
const reducedate = companies.reduce(function(total,company){
    return total + (company.end -company.start)
},0)

console.log(reducedate)


//combined higher order function togather

//task : lets multiply all ages by 2 and then filter above 40 and the sort assending order and then reduce.

console.log(ages)

const combined = ages
.map(sqt => sqt*2)
.filter(age=>age>=40)
.sort((a1,a2)=>a1>a2?1:-1)
.reduce((a,b)=> a+b,0)

console.log(combined)

