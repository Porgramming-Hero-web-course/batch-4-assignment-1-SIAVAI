{
    var sumArray = function (arr) {
        var res = arr.reduce(function (acc, curr) { return acc + curr; }, 0);
        return res;
    };
    var res = sumArray([1, 2, 3, 4, 5, 7, 8, 9, 10]);
    console.log(res);
}
