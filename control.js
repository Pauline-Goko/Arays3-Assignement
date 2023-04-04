// Write a function that accepts an array of strings
// and console.logs each element using a for loop.

function arrayStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  let arrStrings = ["Pauline", "Wanjiru", "Codehive", "School", "Cat"];
  arrayStrings(arrStrings);


// Write a function that accepts an array of numbers
// and uses the forEach() method to console.log each number multiplied by 2.

function doubleNums(arr2) {
    arr2.forEach(function(num) {
      console.log(num * 2);
    });
  }
  
  let arrNum = [4, 7, 3, 9, 5];
  doubleNums(arrNum); 
  

  //Write a function that takes in an array of numbers and consoles the 
  //first four items multiplied by 8 and the last two added by 5. 
  //Console the array with the new values

  function multiplyArray(arr3) {
    for (let i = 0; i < 4; i++) {
      arr3[i] *= 8;
    }
  
   
    for (let i = arr3.length - 2; i < arr3.length; i++) {
      arr3[i] += 5;
    }
  
    console.log(arr3);
  }
  
  let arrayNum = [1,2,3,4,5,6,7,8,9];
  multiplyArray(arrayNum); 


  //Write a function that takes in the following array 
  //and use a while loop to iterate and break when the item is equal to the fourth index

function fourthIndex(arr4) {
    let i = 0;
    while (i < arr4.length) {
      if (i === 4) {
        break;
      }
      i++;
    }
    return i;
  }
  
  let arrNum4 = [1,2,3,4,5,6,7,8,9];
  console.log(fourthIndex(arrNum4)); 
  

  //Write a function that takes in a an array of strings
  //and use a continue statement when the item is at the second index



  function arrayFruits(array4) {
    for (let i = 0; i < array4.length; i++) {
      if (i === 2) {
        continue; 
      }
      console.log(array4[i]);
    }
  }
  let fruits= ['apple','plum','banana','strawberries','kiwi'];
  arrayFruits(fruits);  



