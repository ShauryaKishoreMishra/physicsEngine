const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,ground;

function setup() {
  createCanvas(displayWidth,displayHeight);
engine=Engine.create();
world=engine.world;
box1=new Box(400,200,70,70);
ground= new Ground(displayWidth/2,displayHeight-10,displayWidth);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  ground.display();
  }
