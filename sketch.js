

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball;
var ground1,sling1;


function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);

	
ball= new Ball(300,400,60)
ground1=new Ground(350,600)
sling1=new Sling(ball.body,{x:80,y:80})
box1=new Box(400,575)
box2=new Box(400,550)
box3=new Box(400,525)
box4=new Box(400,500)
box5=new Box(400,475)
box6=new Box(400,450)
box7=new Box(400,425)
box8=new Box(400,400)
box9=new Box(400,375)
box10=new Box(400,350)
box11=new Box(400,325)
box12=new Box(400,300)
}


function draw() {

  background("white");
  Engine.update(engine)
ball.display();
ground1.display();
sling1.display();
/*box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
*/
}






