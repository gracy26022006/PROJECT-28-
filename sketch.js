
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, ground;
var stone,sling;
var mango1,mango2,mango3,mango4,mango5;

function preload(){
    boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 660);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,20)

	stone = new Stone(200,200);

	mango1 = new Mango(500,290);
	mango2 = new Mango(420,280);
	mango3 = new Mango(530,200);
	mango4 = new Mango(590,260);
	mango5 = new Mango(680,280);

	tree = new Tree(550,350,10,10);

	sling = new Sling(stone.body,{x:100, y:500});
	
	Engine.run(engine);
  
}

function draw() {
  background(200);

  image(boyImg,60,420,200,300);

  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  
  detectcollision(stone,mango1);
  detectcollision(stone,mango3);
  detectcollision(stone,mango2);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(stone.body);
    }
}

function detectcollision(stone,mango){
    //console.log(mango.body);
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;
    //console.log(stoneBodyPosition.x);
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance <= mango.r + stone.r){
        Matter.Body.setStatic(mango.body,false)
    }
}

