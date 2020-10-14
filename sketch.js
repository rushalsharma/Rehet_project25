const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body

var groundSprite, b1,b2,b3,b4
var p1;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	p1 = new paper(100, 600)

	groundSprite= new Ground(width/2, height-35, width, 40);

	b1 =new box(700, height, 10, 10)




	Engine.run(engine);
}


function draw(){
  background(255);
  Engine.update(engine)
  groundSprite.display();
  p1.display(); 
  b1.display();
  
}

function keyPressed (){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(p1.body, p1.body.position, {x:90, y:-210})
	}
}