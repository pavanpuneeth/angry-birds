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
        //body
        this.chain=Matter.Constraint.create(options);

        //add the body to the world
        Matter.World.add(myWorld,this.chain);
    }

    //functions
    display(){
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
        
    }

    detach(){
        this.chain.bodyA=null
    }
}