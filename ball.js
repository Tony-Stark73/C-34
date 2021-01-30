class Ball{      
    constructor(x,y,r){

var options={
restitution:0.3,
isStatic:false,
density:1.2,
friction:0.5
}

this.r=r
this.body=Bodies.circle(x,y,r/2,options)
World.add(world,this.body)

    }


    
display(){
    var pos=this.body.position;
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.r)
}
    }


