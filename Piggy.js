class Piggy   extends BaseClass{
    constructor (x,y,width,height){
      super(x,y,width,height);
    this.image=loadImage("sprites/enemy.png");
 this.visibility=255
    }
    display(){
      console.log(this.body.speed);
  
      if(this.body.speed<3){
        super.display()
      }
      
      else{
           Matter.World.remove(myWorld,this.body)
           this.visibility=this.visibility-5
           push()
           //put the settings
           tint(255,this.visibility)
           image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
           pop()
           // remove the settings
      }
      
    }
    
    
  }