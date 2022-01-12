// ------------- creating object by literal----------
var employee = {
    eno:101,
    ename:"sumit",
    esal:555555,
    info:function(){
        return this.eno + " "+ this.ename + " " +this.esal;
    }
}
function myfn1(){
    var para = document.getElementById("demo");
     para.innerHTML = "First, by literal: "+ employee.eno +" "+ employee.ename + " "+ employee.esal;
     var para1 = document.getElementById("demo1");
     para1.innerHTML = "Second, by literal : "+employee.info();
}

// ----------------by creating instance of object class------------------
var employee1 = new Object();
employee1.eno = 102;
employee1.ename = "amit";
employee1.esal = 444444;
employee1.info = function(){
    return this.eno + " " + this.ename+ " " + this.esal;
}
function myfn2(){
    var para2 = document.getElementById("demo2");
    para2.innerHTML = "First, instance of object class"+ employee1.eno + " " +employee1.ename +" "+employee1.esal;
    var para3 = document.getElementById("demo3");
    para3.innerHTML = "second, instance of Object class"+ employee1.info();
}
// ----------------- by using object constructor--------------

function employee2(eno,ename,esal){
    this.eno= eno;
    this.ename = ename;
    this.esal = esal;
    this.info = function(){
        return this.eno +" " + this.ename +" "+ this.esal;
    }

}
function myfn3(){
var emp = new employee2(103, "ramesh", 6666666);
var para4 = document.getElementById("demo4");
para4.innerHTML = "first, By using Object constructor"+ emp.eno + " " + emp.ename+ " " + emp.esal;
var para5 = document.getElementById("demo5");
demo5.innerHTML = "second, by using Object constructor" + emp.info();
}
