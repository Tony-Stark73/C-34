class Sling{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.1,
       length:425
    }
    this.pointB=pointB;
   this.sling= Constraint.create(options);
    World.add(world,this.sling);
}

display(){
    var posA=this.sling.bodyA.position
  push();
    strokeWeight(4)
    line (  this.pointB.x,this.pointB.y,posA.x,posA.y)
pop();
}


}
