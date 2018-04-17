var recipes = {prop: 1};


function updateObjectWithKeyAndValue(object, key, value) {
 var newObject = Object.assign({}, object, {key : value});
 return newObject;
}