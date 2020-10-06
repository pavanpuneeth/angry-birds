class BaseClass{
        constructor(x,y,width,height){
          var prop={
           restitution:0.8,
            density:1.2,
            friction:1.2
          }
              this.body=Matter.Bodies.rectangle(x,y,width,height,prop);
          this.width=width;
          this.height=height;
        this.image=loadImage("sprites/wood1.png");
          Matter.World.add(myWorld,this.body);
      
        }
        display(){
          var angle=this.body.angle;
          var pos=this.body.position;
          push();
          
         translate(pos.x,pos.y);
          rotate(angle);
          imageMode(CENTER);
      
          image(this.image,0,0,this.width,this.height);
          pop();
        }
    
}