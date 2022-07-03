class Toy {
  constructor(x, y, w,h,img) {
    var options = { 
      density: 0.1, 
      };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    this.image = img;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
