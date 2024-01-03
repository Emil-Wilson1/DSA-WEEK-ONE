const findCharIndex = (str, char) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  };
 
  const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };
  
  const isPalindrome = (str) => {
    const reversed = reverseString(str);
    return str === reversed;
  };
  

  
  let myString = "Hello, Emil!";
  console.log("Original String:", myString);
  //Output: Original String: Hello, Emil!
  
  console.log("Index of 'i' in the string:", findCharIndex(myString, "i"));
  //Output: Index of 'i' in the string: 9
  
  
  let reversedString = reverseString(myString);
  console.log("Reversed String:", reversedString);
  //Output: Reversed String: !limE ,olleH

  
  console.log("Is the string a palindrome?", isPalindrome(myString));

  //Output: Is the string a palindrome? false
