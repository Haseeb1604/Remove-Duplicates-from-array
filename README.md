# Remove-Duplicates-from-array

<h2><em> EcmaScript 5 Method :-</em></h2>

This method is not the only way of removing Duplicates 
you can also avoid in input method to get value for array and directly use <b>removeDuplicate()</b> function 

The Function will not return new array but it will update the existing array without Duplicates.The value user will enter in input field will be in string form so we have to convert it to array here we used <a href="https://www.w3schools.com/jsref/jsref_split.asp"><b>split()</b></a> function to convert the string to array 

In removeDuplicate function while loop is used where condition will check whether the array has any Duplicates or not. If Array has any duplicate while loop will continues its iteration
Inside for loop during if condition <a href="https://www.w3schools.com/jsref/jsref_lastindexof_array.asp"><b>lastIndexof()</b></a> method is used to check duplicate of value at index i
<a href="https://www.w3schools.com/jsref/jsref_lastindexof_array.asp"><b>lastIndexof()</b></a> is used to check index of value from reverse side

if index from start point doesnt match lastIndexof value then the value present at lastIndexof is removed using<a href="https://www.w3schools.com/jsref/jsref_splice.asp"><b>splice()</b></a>

<h2><em> EcmaScript 6+ Method :-</em></h2>

In EcmaScript 6 Section we used two methods you can filtered array using any of method you like

In first Method we use <a href="https://www.geeksforgeeks.org/sets-in-javascript/#:~:text=A%20set%20is%20a%20collection,values%20whether%20primitive%20or%20objects."><b>Set</b><a> object 
Sets are a new object type with ES6 (ES2015) that allow creating collections of unique values. The values in a set can be either simple primitives like strings or integers as well as more complex object types like object literals or arrays.
after filtering using <a href="https://www.geeksforgeeks.org/sets-in-javascript/#:~:text=A%20set%20is%20a%20collection,values%20whether%20primitive%20or%20objects."><b>Set</b><a> object the values is then converted to array using <a href="https://www.w3schools.com/jsref/jsref_from.asp"><b>Array.from()</b></a> Method 

while in Second Method we used <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"><b>Spread Operator</b></a>. those three dots are ubiquitous in ES6. They crop up everywhere and have several uses. When we use <a href="https://www.geeksforgeeks.org/sets-in-javascript/#:~:text=A%20set%20is%20a%20collection,values%20whether%20primitive%20or%20objects."><b>Set</b><a> object along spread operator they can be used to create an array without Duplicates
