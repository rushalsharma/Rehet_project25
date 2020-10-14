class paper{
    constructor(x, y) {

    var options={
      density: 1.2,
      friction: 5
    }

        this.body = Bodies.circle(x, y, 30, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        fill("white")
        translate(this.body.position.x, this.body.position.y)
        image(this.image, 0, 0, 60, 60);
        pop();
      }
}
