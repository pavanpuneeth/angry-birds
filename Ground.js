class Ground{

    display(){

        rectMode(CENTER);
    fill("brown");
        rect(this.Body.position.x,this.Body.position.y,this.width,this.height);
        
    }
    constructor(x,y,width,height){

        var groundProp={
            isStatic:true
          }
          
          //create the body (1)

          this.Body=Matter.Bodies.rectangle(x,y,width,height,groundProp);
          this.width=width;
          this.height=height;
          
          //adding the body to the world(2)
          Matter.World.add(myWorld,this.Body);
    }


    
      

    }