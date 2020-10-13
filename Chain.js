class Chain{
    //properties
    constructor(){
        //properties
        var options={
            bodyA:bird.body,
            bodyB:log5.body,
            stiffness:0.01,
            length:10
        }
        //body
        this.chain=Matter.Constraint.create(options);

        //add the body to the world
        Matter.World.add(myWorld,this.chain);
    }

    //functions
    display(){
        
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}