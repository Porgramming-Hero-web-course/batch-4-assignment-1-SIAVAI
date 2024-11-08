{
    var validateKeys = function (obj, keys) {
        for (var i = 0; i < keys.length; i++) {
            if (!(keys[i] in obj)) {
                return false;
            }
        }
        return true;
    };
    var person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
    console.log(validateKeys(person, ["name", "address"]));
}
