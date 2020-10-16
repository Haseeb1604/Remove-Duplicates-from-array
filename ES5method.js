function getArrayVal(e){
    // e.target.value will get the targeted event value and then store it in variable inputValue
    var inputValue =  e.target.value; 
    // split method is used to convert a string to an array by spliting the value by specific value.Here we split it by space
    var arrVal = inputValue.split(' '); 
    document.querySelector(".array").innerHTML = arrVal;
    removeDuplicate(arrVal)
    document.querySelector(".filteredArray").innerHTML =  arrVal;
}
function removeDuplicate(myArr){
     while(hasDuplicate(myArr)){// while loop here is used to check whether the loop has any duplicate or not
         for(let i=0 ; i < myArr.length ; i++){
             // i is index by loop and myArr.lastIndexof(myArr[i]) will give index from reverse side of element that is already present at myArr[i]
             if(i!==myArr.lastIndexOf(myArr[i])){
                 myArr.splice(myArr.lastIndexOf(myArr[i]),1) //splice is used to delete or remove specific value upto specific value 
                 }
             }
     }
 } 
 function hasDuplicate(myArr){// hasDuplicate check whether the array has any duplicate or not
     for(let i=0 ; i < myArr.length ; i++){
        if(i!==myArr.lastIndexOf(myArr[i]))
        return  true;
     }
     return false;
 }