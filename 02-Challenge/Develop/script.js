// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialchars = "!@#$%?&";
var passnumbers = "1234567890";


// Write password to the #password input
function writePassword() {
  var passlength = prompt("How many characters would you like in your password? 8-128");
  if (passlength < 8 ) {
    writePassword()
  }  else if (passlength > 128) {
    writePassword()
  }  else {
    askquestion1()
  }
      function askquestion1(){ {
        var lcprompt = prompt("Would you like to include lowercase characters? Y/N");
        if (lcprompt == "n"){
          lowercase = "";
        }   
        askquestion2()
      }
      function askquestion2() {
        var ucprompt = prompt("Would you like to include uppercase letters? Y/N");
        if (ucprompt == "n"){
          uppercase = "";
        }
        askquestion3()
      }
      function askquestion3() {
        var scprompt = prompt("Would you like to include special characters? Y/N");
        if (scprompt == "n"){
          specialchars = "";
        }
        askquestion4()
      } 
      function askquestion4(){
        var pnprompt = prompt("Would you like to include numbers? Y/N");
        if (pnprompt == "n"){
          passnumbers = ""
        }
        var passpreference = lowercase + uppercase + specialchars + passnumbers
        function generatePassword(){
          var finalpass = ""
          for (x=0; x < passlength; x++){
          var randompass = passpreference[Math.floor(Math.random() * passpreference.length)]
          var finalpass = finalpass + randompass
          console.log(finalpass)
          }
          return finalpass
         }
         
         var password = generatePassword();
         var passwordText = document.querySelector("#password");

         passwordText.value = password;
      }
           
      }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
