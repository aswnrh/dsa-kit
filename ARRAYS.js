// Arrays are the most used data structure in DSA.

const num = [10, 20, 30, 40, 50];
// console.log(num[3]);

// Arrays provide:
// fast access
// easy iteration
// ordered storage

num.push(60);
// console.log(num);
// Insert at End → O(1)

num.pop();
// console.log(num);
// Delete at End → O(1)

num.unshift(0);
// console.log(num);
// Insert at Start → O(n)

num.shift();
// console.log(num);
// Delete at Start → O(n)

// Search in Array O(n)
const search = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
// console.log(search(num, 40))

const reverse = (arr) => {
    // In-place reversal using two-pointer swapping
    // let left = 0;
    // let right = arr.length - 1;
    // while (left < right) {
    //     [arr[left], arr[right]] = [arr[right], arr[left]];
    //     left++;
    //     right--;
    // }
    // return arr;

    let rev = [];
    for (let i = arr.length - 1; i > 0; i--) {
        rev.push(arr[i])
    }
    return rev;
}
// console.log(reverse(num));