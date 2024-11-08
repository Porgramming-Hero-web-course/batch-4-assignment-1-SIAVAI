{
    var removeDuplicates = function (arr) {
        var res = [];
        arr.forEach(function (item) {
            if (res.indexOf(item) === -1) {
                res.push(item);
            }
        });
        return res;
    };
    var ans = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6]);
    console.log(ans);
}
