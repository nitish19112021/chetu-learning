function myfun(){
    var obj = {
        eno:101,
        ename: "nitish",
        esal: 454545,
        info: function(){
            return obj.eno +" "+ obj.ename +" "+obj.esal;
        }
    }
    //alert("first number: "+obj.eno+" " +obj.ename  +" "+obj.esal );
    //alert("second number: " +obj["eno"]+" "+obj["ename"]+" "+obj["esal"]);
    alert("first number "+ obj.info());
    alert("second number "+obj["info"]);
}