class Chain{
    //properties

    constructor(body,point){
        //properties
        var options={
            bodyA:body,
            pointB:point,
            stiffness:0.01,
            length:1
        }

this.Sling1=loadImage('sprites/sling1.png')
this.Sling2=loadImage('sprites/sling2.png')
this.Sling3=loadImage('sprites/sling3.png')
        //body
        this.chain=Matter.Constraint.create(options);

        //add the body to the world
        Matter.World.add(myWorld,this.chain);
    }

    //functions
    display(){
    image(this.Sling1,330,350);
    image(this.Sling2,300,350);
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            //console.log(pointA);
            var pointB = this.chain.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<315){
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.Sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.Sling3,pointA.x + 25, pointA.y -10,15,30);
        
            }
            pop();
        }
        
    }

    detach(){
        this.chain.bodyA=null
    }

    attach(body){
        this.chain.bodyA=body
    }
}