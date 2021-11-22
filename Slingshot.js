class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.pointB = pointB;
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        image(this.image1, 200, 70, 50, 150);
        image(this.image2, 179, 70, 37, 90)

        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4)
            stroke(48, 22, 8)
            if(pointA.x<220){
                line(pointA.x, pointA.y, pointB.x - 20, pointB.y);

            line(pointA.x - 0, pointA.y, pointB.x + 20, pointB.y)
            image(this.image3, pointA.x - 30, pointA.y - 10, 15, 30)
            }
            else{ 
                line(pointA.x+5, pointA.y, pointB.x - 20, pointB.y);

                line(pointA.x+5, pointA.y, pointB.x + 20, pointB.y)
                image(this.image3, pointA.x + 25, pointA.y - 10, 15, 30)
            }
           

            pop()
        }
    }

}