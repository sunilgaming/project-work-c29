class Wall {
    constructor(x, y, w, h) {
      var options = {
        restitution: 1.2,
        density: 0.04,
        isStatic : true
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
  
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    }
  
    
  
    display() {
      let pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      fill("brown")
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    
  }
  