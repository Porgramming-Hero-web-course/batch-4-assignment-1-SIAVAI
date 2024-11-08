{
  const sumArray = (arr: number[]): number => {
    const res = arr.reduce((acc, curr) => acc + curr, 0);
    return res;
  };

  const res = sumArray([1, 2, 3, 4, 5, 7, 8, 9, 10]);
  console.log(res);
}
