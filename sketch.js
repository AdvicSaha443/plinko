const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var particles = [];
var divisions = [];

var ground, ground2, ground3;

var divisionHeight = 250;

function preload()
{
	
}

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(250, 690, 500, 10);
	ground2 = new Ground(0, 350, 10, 700);
	ground3 = new Ground(500, 350, 10, 700);

	for (var k = 0; k <=width; k = k + 50) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
	  }

	  for (var j = 75; j <=width; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,75));
	  }
  
	  for (var j = 50; j <=width-10; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,175));
	  }
  
	   for (var j = 75; j <=width; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,275));
	  }
  
	   for (var j = 50; j <=width-10; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,375));
	  }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (frameCount%60===0) {
	particles.push(new Particle(random(500/2-10, 500/2+10), 50, 10));
}

for (var j = 0; j < particles.length; j++) {

	particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {
     
	divisions[k].display();

  }

  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }

  ground.display();
  ground2.display();
  ground3.display();

  drawSprites();
 
}



