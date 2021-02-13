const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
 

bob1 =new bob(300,350,50);
fill("pink")
bob2 =new bob(350,350,50);
fill("purple")
bob3 =new bob(400,350,50);
fill("maroon")
bob4 =new bob(450,350,50);
fill("black")
bob5 =new bob(500,350,50);
fill("violet")

}

function draw() {
  background(255,255,255);  
  ground = new roof(400,100,300,40);
  sling1= new Suspender(bob1.body,ground.body,-50*2,0);
  sling2= new Suspender(bob2.body,ground.body,-25*2,0);
  sling3= new Suspender(bob3.body,ground.body,-0*2,0);
  sling4= new Suspender(bob4.body,ground.body,25*2,0);
  sling5= new Suspender(bob5.body,ground.body,50*2,0);
 
	Engine.run(engine);

}


function draw() {
  background(100);

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


  
