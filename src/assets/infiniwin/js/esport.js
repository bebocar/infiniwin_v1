$(document).ready(function() {

  var canvas = document.querySelector('.es_canvas');

  canvas.height = canvas.parentElement.clientHeight;
  canvas.width = canvas.parentElement.clientWidth;
  var c = canvas.getContext('2d');


  $(window).resize(function() {
    canvas.height = canvas.parentElement.clientHeight;
    canvas.width = canvas.parentElement.clientWidth;
  });

//------------------------------------------------------







//------------------------------------------------------

  function Circle(x, y, dx, dy, w,h, deg,color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.w = w;
    this.h =h;
    this.deg = deg; //Degree
    //this.radius = radius;
    //this.minRadius = radius;
    //this.maxRadius = 40;
    this.color = color;
    this.dead = false; //true if the circle is out of the screen
    this.speed=1;
    this.mouseRange=100;

    this.draw = function() {
      c.save();
      c.translate(x,y);
      c.rotate(deg);
      c.beginPath();
      c.rect(0,0,w,h);
      //c.arc(x, y, radius, 0, Math.PI * 2, false);
      c.fillStyle = color;
      c.fill();
      c.restore();
    }

    this.update = function() {
      x += dx*this.speed;
      y += dy*this.speed;

      if (y < 0 || y > canvas.height || x < 0 || x > canvas.width) {
        this.dead = true;
      }

      this.draw();
    }



    this.kill = function() {
      return this.dead;
    }
  }


  var circleArray = [];


  var pallete = ['#242424', '#404040', '#5e5e5e', '#8a8a8a', '#ebebeb'];

  for (var i = 0; i < 250; i++) {
    circleArray.push(new_circle());
  }


  function new_circle() {
    x = random(0,canvas.width) ;
    y = random(0,canvas.height);
    dx = 0;
    dy = random(-5, -1);
    w = random(5, 12);
    h = 2;
    deg = 90 * (Math.PI/180);
    //deg = random(0,360) * (Math.PI/180);  --random degree
    color = pallete[random(0, (pallete.length-1))];
    return new Circle(x, y, dx, dy, w, h, deg, color);
  }


  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circleArray.length; i++) {
      if (circleArray[i].kill() == true) {
        circleArray.splice(i, 1,new_circle());
      }
      else{
        circleArray[i].update();
      }
    }
  }

  animate();

  //--------Random function (excluding zero)-----------------------------------
  function random(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return (num === 0) ? random(min, max) : num;
  }

})
