function Rectangle(width, heigth, canvas) {

    this.width = width;
    this.heigth = heigth;
    this.ctx = canvas.getContext("2d");

    this.getArea = function () {
        return this.width * this.heigth;
    }
    this.getCircum = function () {
        return (this.width + this.heigth) * 2;
    }

    this.draw = function(x, y) {
        this.ctx.fillStyle = "Blue";
        this.ctx.fillRect(x, y, x + this.width, y + this.heigth);
    }
};

var canvas = document.getElementById("myCanvas");


var rectangle = new Rectangle(200, 100, canvas);
var area = rectangle.getArea();
var circum = rectangle.getCircum();
document.write("area là :" + area + " -- circum" + circum);

rectangle.draw(200, 50);

