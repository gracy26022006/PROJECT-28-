class Mango{
    constructor(x, y) {
        var options = {
            isStatic: true,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, 20, options);
        this.r = 20;
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}
