getArrayVal2=(e)=>{
    // e.target.value will get the targeted event value and then store it in variable inputValue
    // split method is used to convert a string to an array by spliting the value by specific value.Here we split it by space
    const arrVal = e.target.value.split(' ')
    document.querySelector(".array2").innerHTML = arrVal
    const filteredArray = Array.from(new Set(arrVal))
    const filteredArray2 = [...new Set(arrVal)]
    document.querySelector(".filteredArray2").innerHTML =  filteredArray2;
}