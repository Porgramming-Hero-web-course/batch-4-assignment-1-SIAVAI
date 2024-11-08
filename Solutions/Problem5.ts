{
  const getProperty = <T, K extends keyof T>(obj: T, p: K): T[K] => {
    return obj[p];
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
  console.log(getProperty(person, "age"));
}
