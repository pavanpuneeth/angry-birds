class Log{
    constructor(x,y,width,height,angle){
      var LogProp={
       restitution:0.8,
        density:1.2,
        friction:1.2
      }
          this.LogBody=Matter.Bodies.rectangle(x,y,width,height,LogProp);
      this.width=width;
      this.height=height;
      
      Matter.Body.setAngle(this.LogBody,angle);
  
      Matter.World.add(myWorld,this.LogBody);
  
    }
    display(){
      var angle=this.LogBody.angle;
      var pos=this.LogBody.position;
      
      push();
      fill("brown");
      stroke("green");
      strokeWeight(3);
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
    
    
  }