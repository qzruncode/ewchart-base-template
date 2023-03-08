export const disOrder = (arr: Array<any>) => {
  const copyArr = Array.from(arr);
  const newArr: Array<any> = [];

  while (copyArr.length > 0) {
    const index = Math.floor(Math.random() * copyArr.length);
    newArr.push(copyArr[index]);
    copyArr.splice(index, 1);
  }

  return newArr;
};
