//"use strict";
// def print_indices(items):
//     """Print each item in the list, followed by its index.

//     The output should look like this:
//         apple 0
//         berry 1
//         cherry 2

//     Arguments:
//         items (list)

//     Returns:
//         None
//     """

//     for i in range(len(items)):
//         print(f'{items[i]} {i}')
// 1. printIndices
function printIndices(items) {


for (const i in items){
  console.log(`${items[i]} ${i}`);
}

}
// console.log(printIndices(['apple', 'berry', 'cherry']))

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const everyOther = [];

  for (const item in items) {
    if (item % 2 === 0)
      everyOther.push(items[item]);
  }
  return everyOther 
}
//console.log(everyOtherItem(['apple', 'berry', 'cherry', 'banana']))

// 3. smallestNItems
function smallestNItems(items, n) {
  //sort items and then retun first n
  const sortedList = items.sort((a, b) => a - b);
    console.log(sortedList.slice(0,n));
}

console.log(smallestNItems([4, 3, 7, 10, 1], 3))
