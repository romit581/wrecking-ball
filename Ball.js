class BallClass{
constructor(x,y,r){
var options={
restitution:0.3,
density:1,
}
this.body=Bodies.circle(x,y,r,options)
this.r=r
World.add(world,this.body)
}
display(){
    ellipseMode(RADIUS)
    push ()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("green")
    ellipse(0,0,this.r)
    pop()
}

}
