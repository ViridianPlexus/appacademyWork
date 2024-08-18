function changeContext(func, obj) {

  this.func =  func;
  this.obj = obj;
 
  return func.call(obj)

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
