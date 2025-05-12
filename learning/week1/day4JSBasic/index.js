document.getElementById("getNum").addEventListener("click", (e) => {
  const num = document.getElementById("num-input").value;

  // + sign convert string to a number same like Number(),no space!
  console.log(+num + 100);
});

const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  continue;
  break;
}

for (const num of arr) {
}

arr.forEach((number) => {
  console.log(number);
});
