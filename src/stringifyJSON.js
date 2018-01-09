// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arr = [];
  if(typeof obj === "number"||typeof obj === null || typeof obj=== "boolean"){
    return obj + " " ;
  }
  else if(obj === "string"){
    return obj;
  }
  else if(Array.isArray(obj)){
    obj.forEach(stringify(element))
  }
};
