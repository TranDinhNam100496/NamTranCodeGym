function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px;left:' + this.left + 'px;position:absolute;" />';

  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('right: ' + this.left);
  }
  this.moveDown = function () {
    this.top += this.speed;
    console.log('down:' + this.top);
  }
  this.moveLeft = function () {
    this.left -= this.speed;
    console.log('left:' + this.left);
  }
  this.moveUp = function () {
    this.top -= this.speed;
    console.log('up:' + this.top);
  }
}

var hero = new Hero('animation_gif_powerpoint.vn_dragon__29_.gif', 0, 0, 200, 100);

function start() {
  if (hero.top <= 0 && hero.left < window.innerWidth - hero.size - 100) {
    hero.moveRight();
  } 
  else if (hero.left > 0 && hero.top < window.innerHeight - hero.size - 100 ) {
    hero.moveDown();
  } else if (hero.left > 0) {
    hero.moveLeft();
  }
  else if (hero.top > 0) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();