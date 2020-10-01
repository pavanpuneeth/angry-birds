class Bird{
    constructor(x,y,width,height){
      var boxProp={
       restitution:0.8,
        density:1.2,
        friction:0.7
      }
          this.birdBody=Matter.Bodies.rectangle(x,y,width,height,boxProp);
      this.width=width;
      this.height=height;
  
      Matter.World.add(myWorld,this.birdBody);
  
    }
    display(){
      var angle=this.birdBody.angle;
      var pos=this.birdBody.position;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      fill("red");
      stroke("red");
      strokeWeight(3);
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
    
    
  }