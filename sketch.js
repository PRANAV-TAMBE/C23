const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(200,380,400,20);

    box1 = new Box(100,200,50,50);
    box2 = new Box(120,300,50,50);
}

function draw(){
    background("red");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
}