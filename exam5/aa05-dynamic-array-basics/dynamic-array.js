class DynamicArray {

  constructor(defaultSize=4) {

    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {
    // this.data[0] = 99
    // console.log(this.[1])
    // return this.data[]

    return this.data[index];

  }

  unshift(val) {

    // Your code here 
  }

}

const dynapicArr = new DynamicArray(8);
console.log(dynapicArr)
console.log(dynapicArr.read(0))


module.exports = DynamicArray;
