class BottlesClass extends DrawableObject {

    width = 60;
    height = 60;
    offset = {
        top: 10,
        left: 25,
        right: 10,
        bottom: 7
    };


    constructor() {
        super();
        this.loadImages(["img/6_salsa_bottle/2_salsa_bottle_on_ground.png"]);
        this.x = 400 + Math.random() * 500;
        this.y = 390 - Math.random() * 30;
    }
}