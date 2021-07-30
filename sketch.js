const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var cb,cp,pp,pb;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  cb = new ComputerBase (150,height/2,180,150)
  cp = new ComputerPlayer (150,height/2-100,60,100);

  pb = new PlayerBase (850,height/2,180,150)
  pp = new Player (850,height/2-100,60,100);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
cb.display();
cp.display();
   //display Player and computerplayer
pb.display();
pp.display();

}
