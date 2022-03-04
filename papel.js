class papel
{
  constructor(x,y,r){
  
  var options={

    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.image=loadImage("paper.png")
  this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
}
 display(){
var papelPos=this.body.position
this.body.position.x = mouseX;
this.body.position.y = mouseY;
push()
translate(papelPos.x,papelPos.y)
imageMode(CENTER)
rectMode(CENTER)
strokeWeight(3)
fill("white")
image(this.image,0,0,this.r,this.r)
pop()



}
}
