
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:1
	  }
	  ball=Bodies.circle(500, 100, 20, ball_options);
	  World.add(world,ball);

	Engine.run(engine);
  
	  ground=new Ground(600,390,1200,20);

}


function draw() {
	background("skyBlue");  
	rectMode(CENTER);
  
	Engine.update(engine)
  
	rect(ball.position.x, ball.position.y ,50, 50);
	
	ellipseMode(RADIUS);
   ellipse(ball.position.x, ball.position.y, 20, 20);
ground.display();

   drawSprites()
 
}



