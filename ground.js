class Ground{
constructor(x,y){

var options={
    isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=800;
this.height=50;
World.add(world,this.body)
}


    display(){
      var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
    };
   