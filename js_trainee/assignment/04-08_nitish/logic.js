function f1(){
    var a = prompt("Please enter web name");
    
    var b = document.open(a, "_blank", "width = 600 height = 600");
    //b.close();
    window.setTimeout(function (){
        
        var x = b.close();
      x.confirm("do you want to close");
      
      
    }, 3000);
    
  
}