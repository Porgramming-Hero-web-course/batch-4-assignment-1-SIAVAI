{
    var getProperty = function (obj, prop) {
        return obj[prop];
    };
    var person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    console.log(getProperty(person, "age"));
}
