class Rope{
  constructor(bodyA,pointB){
    var options={
   bodyA:bodyA,
   pointB:pointB,
   stiffnes:1.2,
   length:200,
    }
    this.pointB=pointB
    this.Rope=Constraint.create(options)
    World.add(world,this.Rope)
  }
  display(){
  var pA=this.Rope.bodyA.position
  var pB=this.pointB
 line(pA.x,pA.y,pB.x,pB.y)

  }
}