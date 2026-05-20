const str = "hello";

for (let i = 0; i < str.length; i++) {
    //   console.log(str[i]);
}

let rev = str.split("").reverse().join("");
// console.log(rev);

const revStr = (s) => {
    let temp = "";
    for (let i = s.length - 1; i > 0; i--) {
        temp += s[i]
    }
    return temp
}

// console.log(revStr(str))

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam"));