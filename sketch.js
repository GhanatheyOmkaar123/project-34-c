const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var sling1,sling2,sling3,sling4,sling5;
 
function setup() {
	canvas = createCanvas(800,800);
	engine = Engine.create();
	world = engine.world;
  

  bobObj1 = new Pendulum(340,450);
  bobObj2 = new Pendulum(400,450);
  bobObj3 = new Pendulum(460,450);
  bobObj4 = new Pendulum(520,450);
  bobObj5 = new Pendulum(580,450);

  sling1 = new Sling(bobObj1.body,{x:340,y:200});
  sling2 = new Sling(bobObj2.body,{x:400,y:200});
  sling3 = new Sling(bobObj3.body,{x:460,y:200});
  sling4 = new Sling(bobObj4.body,{x:520,y:200});
  sling5 = new Sling(bobObj5.body,{x:580,y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);

bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bobObj1.body, { x: mouseX, y: mouseY});
}

