
//a. Print odd numbers in an array

//Anonymous function
var arr = [115,10,15,13,110,181];

var findOdd = function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(i == 0)
          {
            console.log('Print odd numbrs un an array using Anonymous Function');
          }
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  findOdd(arr);

  //IIFE Function

  (function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(i == 0)
          {
            console.log('Print odd numbrs un an array using IIFE Function');
          }
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  })([1152,10,150,131,11,18])


//b. Convert all the strings to title caps in a string array

//Anonymous function

var titCap =function convertToTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
 var  titleCaseArray = function convertArrayToTitleCase(stringArray) {
    return stringArray.map(titCap);
  }
  
  var inputArray = ["apple", "banana", "cherry"];
  
  console.log('Convert all the strings to title caps in a string array using Anonymous Function')
  console.log(titleCaseArray(inputArray));

  //IIFE Function 
  
  console.log('Convert all the strings to title caps in a string array using IIFE Function')

  var stringArray = ["apple", "banana", "cherry"];
  (function () {
    console.log(stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
  })();
  
  //c. Sum of all numbers in an array

  //Anonymous function

    var arr = [10,150,18,25]

    var sumfun = function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
        if(i == 0)
        {
          console.log('Sum of all numbers in an array using Anonymous function');
        }
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(sumfun(arr));


  //IIFE Function  

    (function(array){
    var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
            if(i == 0)
        {
          console.log('Sum of all numbers in an array using IIFE function');
        }
        sum = sum + array[i];
        }
        console.log(sum);
    })([1,2,15,20])


    //d. Return all the prime numbers in an array
    
    //Anonymous function
    var arr=[3,4,5,6,7]
    
   console.log('Return all prime number using Anonymous function');
    var findprime = function(numArray){
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number == 1)
            return false;

            else if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    }
        findprime(arr)         
   //IIFE function
   
   console.log('Return all prime number using IIFE function');
                   (  
                   function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([3,4,5,6,7])

//. Return all the palindromes in an array

//Anonymous function

var arr = ['madam','hi'];
var rslt=[]

console.log('Return all Palindrome  using Anonymous function');

var findPal = function(arrval)
{
    for(var i =0 ; i<arrval.length; i ++)
    {
        var arrvalCheck = arrval[i].split('').reverse().join('');;
        if (arrval[i]==arrvalCheck)
        {
            rslt.push(arrval[i])
        }
    }
}
findPal(arr);
console.log(rslt);

//IIFE function

var arr = ['madam','hi'];
var rslt=[]

console.log('Return all Palindrome  using IIFE function');

(function(arrval)
{
    for(var i =0 ; i<arrval.length; i ++)
    {
        var arrvalCheck = arrval[i].split('').reverse().join('');;
        if (arrval[i]==arrvalCheck)
        {
            rslt.push(arrval[i])
        }
    }
})(arr)

console.log(rslt);


//f. Return median of two sorted arrays of the same size.

//Anonymous function

console.log(' Return median of two sorted arrays of the same size  using Anonymous function');
var findMedian = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        var midIndex1 = length / 2 - 1;
        var midIndex2 = length / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
        // If the length is odd, return the middle element
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
};

// Example usage
var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];

var median = findMedian(nums1, nums2);
console.log(median);

//IIFE Function


console.log(' Return median of two sorted arrays of the same size  using IIFE function');

(function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        var midIndex1 = length / 2 - 1;
        var midIndex2 = length / 2;
        console.log((mergedArray[midIndex1] + mergedArray[midIndex2]) / 2);
    } else {
        // If the length is odd, return the middle element
        const midIndex = Math.floor(length / 2);
        console.log(mergedArray[midIndex]);
    }
})(nums1,nums2)


//g. Remove duplicates from an Array
//Anonymous Function : 
var arr = [1,2,1,6,5,5]
console.log('Remove duplicates from an Array using Anonymous function')
var finddup = function(array){
                        var dup = [...new Set(array)];
                        console.log(dup);
                      }

finddup(arr);

//IIFE Function

console.log('Remove duplicates from an Array using IIFE function');

(function(array){
    var dup = [...new Set(array)];
    console.log(dup);
   })(arr)


//h. Rotate an array by k times
//anonymous function

console.log('Remove duplicates from an Array using Anonymuos function');
var rotateArray = function(nums, k) {
    // Ensure k is within the array length
    k = k % nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
};

// Helper function to reverse a portion of the array
function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        // Move towards the center
        start++;
        end--;
    }
}

// Example usage
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

rotateArray(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]

//IIFE Function

console.log('Remove duplicates from an Array using IIFE function');
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

(function(nums, k) {
    // Ensure k is within the array length
    k = k % nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);

    // Helper function to reverse a portion of the array
    function reverse(nums, start, end) {
        while (start < end) {
            // Swap elements at start and end indices
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;

            // Move towards the center
            start++;
            end--;
        }
    }
})(nums, k);

console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]


// arrow functions
//a. Print odd numbers in an array
var arr = [115,10,15,13,110,181];
var findOdd = (array)=>{
    for(var i = 0 ; i< array.length ; i++){
          if(i == 0)
          {
            console.log('Print odd numbrs un an array using Arrow Function');
          }
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  findOdd(arr);

  //b. Convert all the strings to title caps in a string array

//Arrow function

var titCap =(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
 var  titleCaseArray =(stringArray)=> {
    return stringArray.map(titCap);
  }
  
  var inputArray = ["apple", "banana", "cherry"];
  
  console.log('Convert all the strings to title caps in a string array using Arrow Function')
  console.log(titleCaseArray(inputArray));

    //c. Sum of all numbers in an array

  //Arrow function

  var arr = [10,150,18,25]

  var sumfun = (array)=>{
  var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
      if(i == 0)
      {
        console.log('Sum of all numbers in an array using Arrow function');
      }
     sum = sum + array[i];
   }
   return sum;
}
console.log(sumfun(arr));


//Anonymous function
var arr=[3,4,5,6,7]
    
console.log('Return all prime number using arrow function');
 var findprime = (numArray)=>{
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number == 1)
         return false;

         else if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 }
     findprime(arr) 

     //. Return all the palindromes in an array

//arrow function

var arr = ['madam','hi'];
var rslt=[]

console.log('Return all Palindrome  using Anonymous function');

var findPal = (arrval)=>
{
    for(var i =0 ; i<arrval.length; i ++)
    {
        var arrvalCheck = arrval[i].split('').reverse().join('');;
        if (arrval[i]==arrvalCheck)
        {
            rslt.push(arrval[i])
        }
    }
}
findPal(arr);
console.log(rslt);



