class Bottle extends DrawableObject {
    width = 60;
    height = 60;

    constructor() {
        super();
        this.loadImage(["img/6_salsa_bottle/2_salsa_bottle_on_ground.png"]);
        this.x = 500 + Math.random() * 1500;
        this.y = 330 - Math.random() * 30;
    }
}