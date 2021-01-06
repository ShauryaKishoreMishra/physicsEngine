const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,ground;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
var options={restitution:0.9};
box1=Bodies.rectangle(400,200,70,70,options);
World.add(world,box1);
var options={isStatic:true}
ground=Bodies.rectangle(400,390,800,20,options);
World.add(world,ground);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,70,70);
  rect(ground.position.x,ground.position.y,800,20);
  }