
const appendElement = (arr, element) => {
  arr[arr.length] = element;
};

const prependElement = (arr, element) => {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
};


const insertAtIndex = (arr, index, element) => {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = element;
};



let myArray = [1, 2, 9, 7, 5];
console.log("Original Array:", myArray);

appendElement(myArray, 6);
prependElement(myArray, 3);
insertAtIndex(myArray, 2, 8);

console.log("Array after operations:", myArray);


//output=> [ 3, 1, 8, 2, 9, 7, 5, 6]
