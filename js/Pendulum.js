class Pendulum {
constructor(x,y){
    var options = {
        isStatic:false,
        restitution : 1,
        friction : 0,
        frictionAir : 0.0,

    };
    this.body = Bodies.rectangle(x,y,40,40,options);
    this.x = x;
    this.y = y;
    //this.color = color;
    World.add(world,this.body);
}
display() {
var angle = this.body.angle;
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
fill("green");
ellipse(0,0,60,60);
pop();
}
}