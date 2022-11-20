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

chosenCharacters = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = prompt("Enter your pass length between 10 and 64");
  while (passLength < 10 || passLength > 64) {
    alert("Please enter a number between 10 and 64.")
    var passLength = prompt("Enter your pass length between 10 and 64");
  }
  var passLowercase = confirm("Do you want to use lowecase letters in your password?");
  if (passLowercase) {
    chosenCharacters.push(lowerCasedCharacters);
  }
  var passUppercase = confirm("Do you want to use uppercase letters in your password?");
  if (passUppercase) {
    chosenCharacters.push(upperCasedCharacters);
  }
  var passNumeric = confirm("Do you want to use numbers in your password?")
  if (passNumeric) {
    chosenCharacters.push(numericCharacters);
  }
  var passSpacial = confirm("Do you want to use special characters in your password?");
  if (passSpacial) {
    chosenCharacters.push(specialCharacters);
  }

  var allChosenCharacters = chosenCharacters.flat();
  
  return [allChosenCharacters];
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNumber = [];

}

// Function to generate password with user input
function generatePassword() {
  var pass = '';

  var passDetails = getPasswordOptions();

  return pass
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

// random karakteri almak icin for loop kullanacagiz. Bir ornek

// var passLength = 35;
// var passResult = '';

// for (var count = 1; count <= passLength; count++) {
//   console.log(count);
// }