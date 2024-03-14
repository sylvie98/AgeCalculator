const birth=document.getElementById("birthdate");
function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    let date=birth.value
    if(date ===""){
      document.getElementById("age").innerHTML= "Your Can Enter Your BirthDay Date";
    }
    else{
      document.getElementById("age").innerHTML= "Your age is " + age + " years old.";
    }
   
   
   
      
     
      
    
  }