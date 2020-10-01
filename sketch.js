
var myWorld,myEngine,groundBody;

var box1,box2;
var bird;
var Piggy1,Piggy2;

var log1,log2,log3,log4;

function setup() {
  createCanvas(1200, 800);
  //angleMode(DEGREES);
  //create the engine
  myEngine=Matter.Engine.create();
  //create the world
  myWorld=myEngine.world;
  
  var groundProp={
    isStatic:true
  }
  
  //create the body (1)
  groundBody=Matter.Bodies.rectangle(600,800,1200,20,groundProp);
  
  
  //adding the body to the world(2)
  Matter.World.add(myWorld,groundBody);
  
  box1=new Box(750,750,50,50);
  box2=new Box(850,750,50,50);
  box3=new Box(750,680,50,50);
  box4=new Box(850,680,50,50);
  box5=new Box(800,610,50,50);
  
  bird=new Bird(300,300,50,50);


  Piggy1=new Piggy(800,750,30,30);
  Piggy2=new Piggy(800,680,30,30);

  log1=new Log(800,730,20,200,PI/2);
  log2=new Log(800,650,20,200,PI/2);
  log3=new Log(750,610,20,110,PI/6);
  log4=new Log(850,610,20,70,-PI/6);
}

function draw() {
  background(220);
  console.log(box2.boxBody.angle);
  text(mouseX+","+mouseY,mouseX,mouseY);
  //refresh the physics engine
  Matter.Engine.update(myEngine);
  console.log(groundBody.position.y);
  //how should ur ground look like
  rectMode(CENTER);
  rect(groundBody.position.x,groundBody.position.y,1200,20);
  
  box1.display();
  
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  bird.display();
  Piggy1.display();
  Piggy2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  //circle(ballBody.position.x,ballBody.position.y,20);
}