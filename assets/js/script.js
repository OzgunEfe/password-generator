// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// In this section, I am getting the length and character options from the user.
function getPasswordOptions() {
  var passwordLength = prompt("Please enter your password length between 10 and 64");
  while (passwordLength < 10 || passwordLength > 64) {
    alert("Please enter a number between 10 and 64.");
    var passwordLength = prompt("Enter your pass length between 10 and 64");
  }
  var isLowerCase = confirm("Do you want to use lowecase letters in your password?");
  var isUpperCase = confirm("Do you want to use uppercase letters in your password?");
  var isPassNumeric = confirm("Do you want to use numbers in your password?");
  var isPassSpacial = confirm("Do you want to use special characters in your password?");

  // I check the all password options here if all of them are false I show an alert to the user.
  if (!isLowerCase && !isUpperCase && !isPassNumeric && !isPassSpacial) {
    alert("You must select at least one options!\nPlease try again.")
    getPasswordOptions();
  }

  // I return the values to use in other functions.
  return {passwordLength, isLowerCase, isUpperCase, isPassNumeric, isPassSpacial};
}

// In this section, I check the options selected by the user and add the selected character data sets to a list.
function getChosenCharacters(options){
  var selectedCharacters = [];
  if (options.isLowerCase) {
    selectedCharacters.push(lowerCasedCharacters)
  }
  if (options.isUpperCase) {
    selectedCharacters.push(upperCasedCharacters)
  }
  if (options.isPassNumeric) {
    selectedCharacters.push(numericCharacters)
  }
  if (options.isPassSpacial) {
    selectedCharacters.push(specialCharacters)
  }

  // I used the flat() method to convert all selected character data arrays into a single array.
  return selectedCharacters.flat();
}


// Function for getting a random element from an array
// In this function, I used two parameters because the for loop should run at the length selected by the user, but the selected random character should be selected from the entire chosen character list. 
// Therefore, the first parameter is the chosen characters list (chosenCharactersList). The second parameter is the chosen length by the user (passwordLength).
function getRandom(list, passwordCharactersLength) {
  var randomCharacters = [];
  for (i=1; i<=passwordCharactersLength; i++){
    var index = Math.floor(Math.random() * list.length);
    randomCharacters.push(list[index]);
  }

  return randomCharacters;
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var chosenCharactersList = getChosenCharacters(passwordOptions);

  return getRandom(chosenCharactersList, passwordOptions.passwordLength).join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);