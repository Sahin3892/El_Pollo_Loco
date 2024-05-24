class BottlesClass extends DrawableObject {

    width = 60;
    height =60;



    constructor() {
        super();
        this.loadImages(["img/6_salsa_bottle/2_salsa_bottle_on_ground.png"]);
        this.x = 400 + Math.random() * 500;
        this.y = 300 - Math.random() * 30;
    }
}