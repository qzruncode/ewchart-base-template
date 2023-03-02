export const disOrder = (arr: Array<number | null>) => {
  const copyArr = Array.from(arr);
  const newArr: Array<number | null> = [];

  while (copyArr.length > 0) {
    const index = Math.floor(Math.random() * copyArr.length);
    newArr.push(copyArr[index]);
    copyArr.splice(index, 1);
  }

  return newArr;
};
