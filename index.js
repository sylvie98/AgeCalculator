function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    
    document.getElementById("age").innerHTML= "Your age is " + age + " years old.";
  }