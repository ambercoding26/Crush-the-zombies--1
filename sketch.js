const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []
var bridge, base;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


}

function draw() {
  background(51);
  Engine.update(engine);

  display.stones();


}


Matter.Composite.add(bridge.body, joinPoint);
jointLink = new Link(bridge, jointPoint);

for (var i = 0; i <= 8; i++){
  var x = random(width / 2 - 200, width / 2 + 300);
  var y = random(-10, 140);
  var stone = new Stone(x,y,80,80);
  stones.push(stone);
}