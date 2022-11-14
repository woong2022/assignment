let arr = [];
const num = 7;

for (let i = 0; i < num; i++) {
  arr[i] = i + 1;
}

console.log("시작 값 : ", arr);

for (let i = 0; i <= num; i++) {
  arr.shift();

  if (arr.length > 0) {
    const arr2 = [...arr];
    arr2.shift();
    arr2.push(arr[0]);

    arr = [...arr2];
    console.log("결과 값 : ", arr);
  }
}

