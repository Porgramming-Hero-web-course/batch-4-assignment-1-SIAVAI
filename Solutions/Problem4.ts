{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {
      return 3.1416 * shape.radius ** 2;
    } else {
      return shape.width * shape.height;
    }
    return 0;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
}
