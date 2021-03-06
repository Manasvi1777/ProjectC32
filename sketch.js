const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8;

function setup() {
  createCanvas(800,400);

  circle1 = new Circle(400,100,20);
  circle2 = new Circle(450,100,20);
  circle3 = new Circle(500,100,20);
  circle4 = new Circle(550,100,20);
  circle5 = new Circle(600,100,20);
  circle6 = new Circle(650,100,20);
  circle7 = new Circle(700,100,20);
  circle8 = new Circle(750,100,20);

}

function draw() {
  background(0);  

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();

  drawSprites();
}