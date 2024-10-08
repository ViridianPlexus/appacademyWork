/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
function flatten(arr) {
  let flattenArr = [];
  if (!arr.length) return arr;  
  let holder = arr.shift();
  //console.log(holder);
    if (Array.isArray(holder)) {   // if any of the index has an array )
      return( flattenArr.concat([...flatten(holder)]))
    }
    else{
      flattenArr.push(holder)
      return flattenArr.concat([...flatten(arr)]);
    }   
  
}  
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  