class Stone{
    constructor(x,y,width,height,angle){
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.9
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.r = 25;
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
    }
  }
  
