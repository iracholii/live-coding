// input: obj, string, any
// output: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // input: obj1, obj2 ...
  // output: obj1
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const product = {
  name: 'Laptop',
};

const res = addPropertyV4(product, 'price', 250);
console.log(res);
console.log(addPropertyV4(res, 'color', 'white'));
console.log(product);

// rest operator

function sum(...args) {
  console.log(args);
}
sum(1, 2);
