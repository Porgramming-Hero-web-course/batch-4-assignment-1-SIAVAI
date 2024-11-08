{
    var calculateShapeArea = function (shape) {
        if (shape.shape === "circle") {
            return 3.1416 * Math.pow(shape.radius, 2);
        }
        else {
            return shape.width * shape.height;
        }
        return 0;
    };
    var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    var rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
