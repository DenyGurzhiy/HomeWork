// Tasks:
// 1. Add new array with drinks
// 2. Make drinks show up in the list
// 3.Replace repeating loops with a function. Function should: 
//   1. Accept any array
//   2. Iterate through array
//   3. On each iteration create a <li> and put element of array      inside as text
//   4. Attach <li> to the list


// // Declaring arrays
const fruits = ['Apples', 'Tangerines', 'Grapes', 'Pears'];
const dairy = ['Cheese', 'Milk', 'Yoghurt'];
const vegetables = ['Tomatoes', 'Cucumbers', 'Carrots'];
const drinks = ['Mineral water', 'Juice', 'Vine', 'Coca-Cola'];

const goods = fruits.concat(dairy, vegetables, drinks);


// // Declaring function which accepts text and outputs <li> html element
function createListItem(text) {
    // Creating <li> element
    const listItem = document.createElement('li');
    // Creating text node
    const textNode = document.createTextNode(text);
    // Putting text node inside of <li> HTML element
    listItem.appendChild(textNode);
    // Returning listItem
    return listItem;
}

// // Getting <ul> element from HTML to which we will attach list elements later
// const list = document.getElementById('shopping-list');

// createPutLi(goods);

// function createPutLi(arr) {
//     for (itemList of arr) {
//         let item = createListItem(itemList);
//         list.appendChild(item);
//     }
// }


/*

// Iterate through fruits array and attach created <li> to list
for (let i = 0; i < fruits.length; i++) {
    // Create <li> html element with fruit name in it
    const fruit = createListItem(fruits[i]);
    // Put <li> inside of <ul> list element
    list.appendChild(fruit);
}

for (let i = 0; i < dairy.length; i++) {
    const dairyItem = createListItem(dairy[i]);
    list.appendChild(dairyItem);
}

for (let i = 0; i < vegetables.length; i++) {
    const veggie = createListItem(vegetables[i]);
    list.appendChild(veggie);
}

// for (let i = 0; i < drinks.length; i++) {
//     const drink = createListItem(drinks[i]);
//     list.appendChild(drink);
// }
*/





// let str = 'my-short-string';
// let rez = camelizeString(str);
// function camelizeString(str) {
//     str = str.split('-').map((item, index) => (index != 0) ? (item[0].toUpperCase() + item.slice(1)) : item).join('');
//     console.log(str);
//     return str;
// }
// console.log(rez);

// let a = 1;
// let b = 4;
// let arr = [5, 3, 8, 1];
// // function filterRange(arr, a, b) {
// //     // let result = arr.filter(item => (item >= a) && (item <= b));
// //     // console.log(result);
// //     // return result;
// //     return arr.filter(item => (item >= a) && (item <= b));
// // }
// filterRange = (arr, a, b) => arr.filter(item => (item >= a && item <= b));
// console.log(filterRange(arr, a, b));

// let a = 1;
// let b = 4;
// let arr = [7, 4, 5, 3, 8, 1, 9, 6];
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] < a) || (arr[i] > b)) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// filterRangeInPlace(arr, a, b);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => (b - a));
// console.log(arr);


// function copySorted(arr) {
//     return arr.concat().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без змін)


// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ivan, petro, mariya];
// console.log(users);

// let names = users.map(item => item.name);
// console.log(names);

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ivan, petro, mariya];
// console.log(users);

// let usersMapped = users.map(item => ({ fullName: `${item.name} ${item.surname}`, id: item.id }));
// console.log(usersMapped);


// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [petro, ivan, mariya];

// sortByAge = (arr) => arr.sort((a, b) => (a.age - b.age));
// console.log(sortByAge(arr));


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];


// getAverageAge = (arr) => arr.reduce((sum, item) => sum + item.age, 0) / arr.length;

// console.log(getAverageAge(arr));

// //VARIANT 1
// const arr1 = [0, 1, 2];
// function increaseNumbersByOne1(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i]++;
//     }
//     return (numbers);
// }
// const increasdArray1 = increaseNumbersByOne1(arr1);
// console.log(increasdArray1);


// // //VARIANT 2
// const arr2 = [0, 1, 2];
// const increasdArray2 = numbers => {
//     numbers.forEach((item, index) => numbers[index] = item + 1);
//     return numbers;
// }
// console.log(increasdArray2(arr2));


// // //VARIANT 3
// const arr3 = [0, 1, 2];
// const increasdArray3 = numbers => numbers = numbers.map(item => item++);
// console.log(increasdArray2(arr3));


// const arr = [10, 15, 23, 3, 45, 34, 15, 55];
// const min = 20;

// //VARIANT 1
// filterByMinimalNumber = (arr, min) => arr.filter(item => item > min);
// const filteredArray1 = filterByMinimalNumber(arr, min);
// console.log(filteredArray1);

// //VARIANT 2
// function filterByMinimalNumber(arr, min) {
//     let res = arr.map(item => (item > min));
// }
// const filteredArray2 = filterByMinimalNumber(arr, min);
// console.log(filteredArray2);

// const nums = [10000];
// findNumbers(nums);
// function findNumbers(nums) {
//     let k = 0;
//     for (num of nums) {
//         if (countNumb(num) % 2 === 0) {
//             k++
//         }
//     }
//     return k;
// }

// function countNumb(num) {
//     for (var i = 0; num > 1; i++) {
//         num = num / 10;
//     }

//     return i;
// }
// console.log(findNumbers(nums));


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var findNumbers = function(nums) {
//     let k = 0;
//     for (var num of nums) {
//         if (countNumb(num) % 2 === 0) {
//             k++;
//         }
//     }
//     return k;
// };
// function countNumb(num) {
//     for (var i = 0; num > 1; i++) {
//         num = num / 10;
//     }
//     return i;
// }
// const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

// findSpecialInteger(arr);

// function findSpecialInteger(arr) {
//     var res;
//     for (let i = 0; i < arr.length; i++) {
//         var x = arr[i];
//         var count = 0;
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] === x) {
//                 count = count + 1;
//             }
//         }
//         //console.log(count);
//         var ocr = count / arr.length;
//         if (ocr > 0.25) {
//             res = x;
//         }
//     }
//     console.log(res);
//     return res;
// }
