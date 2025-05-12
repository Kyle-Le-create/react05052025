export function checkIfStringIsNumber(str) {
  if (typeof str !== "string" || str.length === 0) return false;
  let hasDot = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === ".") {
      if (hasDot) return false;
      hasDot = true;
    } else if (ch < "0" || ch > "9") {
      return false;
    }
  }
  return true;
}

export function findAvgOfNums(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (typeof v === "number") {
      sum += v;
      count++;
    } else if (typeof v === "string" && checkIfStringIsNumber(v)) {
      sum += parseFloat(v);
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}

export function findAverageAge(people) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (p && typeof p.age === "number") {
      sum += p.age;
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}

export function findAvgAgeByJob(people, job) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (p && p.job === job && typeof p.age === "number") {
      sum += p.age;
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}

export function findMaxNum(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

export function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

export function findSumOfEvenNums(arr) {
  const evens = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}

export function bubbleSortArr1(num) {
  const a = [];
  for (let i = 0; i < num.length; i++) {
    a[i] = num[i];
  }
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        const tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
  }
  return a;
}

export function bubbleSortArr2(num) {
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - 1 - i; j++) {
      if (num[j] > num[j + 1]) {
        const tmp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = tmp;
      }
    }
  }
  return num;
}

export function removeTypes(arr, typeToRemove) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== typeToRemove) {
      res.push(arr[i]);
    }
  }
  return res;
}

export function changeNumsByAmount(nums, amount, operator) {
  const out = [];
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (operator === "+") {
      val = val + amount;
    } else if (operator === "-") {
      val = val - amount;
    } else if (operator === "*") {
      val = val * amount;
    } else if (operator === "/") {
      val = val / amount;
    }
    out.push(val);
  }
  return out;
}

export function removeNumFromArr(nums, num) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      res.push(nums[i]);
    }
  }
  return res;
}
