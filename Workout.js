
// Find the third Largest number in an array(Without Sorting)
let arr=[1,2,3,4,5,6];
function thirdL(arr){
    let first=-Infinity;
    let second=-Infinity;
    let third=-Infinity;
    let current=null;
    for(var i=0;i<arr.length;i++){
        current = arr[i];
        if(current>first){
          third=second;
          second=first;
          first=current;
          console.log(current)

        }
      else if(current>second){
            third=second;
            second=current;
            console.log(current)
        }
      else if(current>third){
            third=current;
            console.log(current)

        }
}
console.log(third)
}


// With Sorting
function thirdL(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var k=i+1;k<arr.length;k++){
          if(arr[i]<arr[k]){
              let temp=arr[i]
              arr[i]=arr[k];
              arr[k]=temp;
          }  
        }
    }
  return console.log(arr[2])
}

thirdL(arr);

// Function to reverse an array
function reverse(arr){
    let half=Math.trunc(arr.length/2)
    let last=arr.length-1;
    let temp=null;
    for (var i=0;i<half;i++){
        temp=arr[i]
        arr[i]=arr[last-i];
        arr[last-i]=temp;
    }
    return console.log(arr)
}

reverse(arr);

// Recursion Problems

// Reversing a String
let str="hello"
function revStr(str){
    if(str==="" || str=== null){
        return "";
    }
    
    return revStr(str.substr(1))+ str[0]
}

let result=revStr(str)
console.log(result)

// Factorial
function factorial(n){
    if(n==1){
        return 1;
    }
    return n* factorial(n-1);
}

console.log(factorial(5))



