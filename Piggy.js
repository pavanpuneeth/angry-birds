class Piggy{
    constructor(x,y,width,height){
      var PiggyProp={
       restitution:0.8,
        density:1.2,
        friction:0.7
      }
          this.PiggyBody=Matter.Bodies.rectangle(x,y,width,height,PiggyProp);
      this.width=width;
      this.height=height;
  
      Matter.World.add(myWorld,this.PiggyBody);
  
    }
    display(){
      var angle=this.PiggyBody.angle;
      var pos=this.PiggyBody.position;
  
  
      
      push();
      fill("green");
      stroke("green");
      strokeWeight(3);
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
    
    
  }