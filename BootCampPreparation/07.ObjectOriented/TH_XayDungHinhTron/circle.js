var Circle = function(radius) {
    this.getRadius = function() {
        return radius;
    }
    this.getArea = function() {
        return Math.PI * radius * radius;
    }
};
var circle = new Circle(2);
var radius = circle.getRadius();
var area = circle.getArea();
alert("radius: " + radius + "; area: " + area); 