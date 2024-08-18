function flatten(arr) {
    let flattenArr = [];
  
    arr.forEach(element => {
      if (Array.isArray(element)) {
        flattenArr.push(...flatten(element));
      } else {
        flattenArr.push(element); 
      }
    });
    return flattenArr;
  }