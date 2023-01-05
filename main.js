// Only JS, no React code
/*
- Simplify alert messages (Use maps) - Don't use splice 
- Simplify logic
- Functions are defined by name and parameter - Name and parameter must be the same in order for the code to recognise it
*/

/*
====================================
          Email Check
====================================
*/
let emailCheck = false
let mockEmail = ["guy1@gmail.com", "guy2@gmail.com"] // Mock email database
let userEmail = "guy1@gmail.com" // Mock user email 

if (mockEmail.includes(userEmail)) {
  emailCheck = true
}

/* 
====================================
          Password
====================================
*/
let userPassword = "fox123!FHGH" // Mock user password
let userConfirm = "fox123!FHGH" // Mock user confirm password
// Regex patterns for .test()
var numbers = /[0-9]/;
var upperChar  =/[A-Z]/;
var lowerChar = /[a-z]/;
var specialChar = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
// Dictionary of password conditions
let checks = {
  numCheck: false,
  capCheck: false,
  lowCheck: false,
  specialCheck: false,
  passwordMatch: false,
  lengthCheck: false
}

// testing the conditions password must meet
if (numbers.test(userPassword)){
    checks.numCheck=true;
}
if (upperChar.test(userPassword)) {
    checks.capCheck=true;
}
if (lowerChar.test(userPassword)){
  checks.lowCheck=true;
}
if (specialChar.test(userPassword)){
  checks.specialCheck=true;
}
if (userPassword === userConfirm){
  checks.passwordMatch = true
}
if (userPassword.length >= 8){
  checks.lengthCheck = true
}


/* 
====================================
          Alert messages
====================================
*/

let alertMessages = {
  1: "This E-mail is already associated with an existing account",
  2: "Password does not contain numbers",
  3: "Password does not contain capital letters",
  4: "Password does not contain lowercase letters",
  5: "Password must be at least 8 characters",
  6: "Password does not contain special characters (E.g. !£$%^&*()/@?)",
  8: "The passwords do not match each other"
}
    
let i, len, count; // Initialising variables

checks = Object.values(checks) // Converts the dictionary into an array
checks.unshift(emailCheck) // Adds the boolean value from EmailCheck onto the beginning of the array of checks
if (checks.includes(false)){ // Only iterates through the checks array if there is a false within it 
  for (i = 0, len=checks.length-1 ; i < len ; i++) { // len = 8
    if (checks.at(i-1) === true) {continue;} // If value is true, skips over the that iteration - Only console.log() values that are false
    var existsError = alertMessages[i]
    console.log(existsError)
  }
} else{ // If all conditions are met - Success!
  console.log("Sign up successful!")
}