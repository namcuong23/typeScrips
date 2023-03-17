// Generics
// function showStringData(a: string): string {
//     return a
// }

// function showNumberData(a: number): number {
//     return a
// }

// function showData<T>(a: T): T {
//     return a
// }

// showData<string>("string")

// const arrNum = [1,2,3,5,8,13] //Fibonacci
// const arrStr = ["Quang","Quy","Hau","Duc"] //Fibonacci

// function we17304_map(arr: number[], callback: (item: number) => number): number[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }

// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }

// const result = we17304_map(arrStr, (item) => {
//     return item + " - we17304"
// })

// console.log(result);

// const arrNum2 = [13,1,3,5,8,2] //Fibonacci
// const arrStr2 = ["b", "cb", "ab", "e"]
// arrNum2.sort((a, b) => {
//     return b - a
// })

// // console.log(arrNum2);

// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i ++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// selectionSort(arrStr2)
// console.log(arrStr2);
const arr1 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c', 'd', 'e'];
 function sortInfo<T>(arr: T[], callback:(a:T , b:T) => number):T[]{
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(callback(arr[i], arr[j]) < 0){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }   
    }
    return arr;
 }
sortInfo(arr4, (a, b) => a<b? -1 : 1);
// sortInfo(arr4, (a, b) => a.localeCompare(b));
console.log(arr1);
console.log(arr4);
