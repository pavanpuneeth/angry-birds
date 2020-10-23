
var myWorld,myEngine,groundBody,platform;

var box1,box2;
var bird;
var Piggy1,Piggy2;

var log1,log2,log3,log4;

var chain;

function setup() {
  createCanvas(1200, 800);
  //angleMode(DEGREES);
  //create the engine
  myEngine=Matter.Engine.create();
  //create the world
  myWorld=myEngine.world;
  
  ground=new Ground(600,800,1200,20);
platform=new Ground(200,680,400,260);

  box1=new Box(750,750,50,50);
  box2=new Box(850,750,50,50);
  box3=new Box(750,680,50,50);
  box4=new Box(850,680,50,50);
  box5=new Box(800,610,50,50);
  
  bird=new Bird(280,250,50,50);


  

  Piggy1=new Piggy(800,750,30,30);
  Piggy2=new Piggy(800,680,30,30);

  log1=new Log(800,730,20,200,PI/2);
  log2=new Log(800,650,20,200,PI/2);
  log3=new Log(750,610,20,110,PI/6);
  log4=new Log(850,610,20,70,-PI/6);
  //log5=new Log(200,600,20,50,PI/2);
  chain=new Chain(bird.body,{x:332,y:380})
}

function draw() {
  background(220);
  //console.log(box2.boxBody.angle);
  text(mouseX+","+mouseY,mouseX,mouseY);
  //refresh the physics engine
  Matter.Engine.update(myEngine);
  //console.log(groundBody.position.y);
  //how should ur ground look like
  
  ground.display();
  platform.display();
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
  //log5.display();
  chain.display();
  
  //circle(ballBody.position.x,ballBody.position.y,20);
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){
chain.detach()


}

function keyPressed(){
if(keyCode===32){
  chain.attach(bird.body)
}


}