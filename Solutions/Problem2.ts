{
  const removeDuplicates = (arr: number[]): number[] => {
    const res: number[] = [];
    arr.forEach((item) => {
      if (res.indexOf(item) === -1) {
        res.push(item);
      }
    });
    return res;
  };

  const ans = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6]);
  console.log(ans);
}
