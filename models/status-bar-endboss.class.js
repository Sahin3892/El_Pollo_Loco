class StatusBarEndbossClass extends StatusBar {

    IMAGE_ENDBOSS_HEALTH = [
        "img/7_statusbars/2_statusbar_endboss/green.png"
    ];
    constructor() {
        super();
        this.health = 100;
    }
    draw(ctx) {
        super.draw(ctx);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y - 10, this.health, 5);
    }
    updateHealth(value) {
        this.health += value;
    }
    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }
    loadImage(path) {
        // implementation
        super.loadImage(this.IMAGE_ENDBOSS_HEALTH);
    }

}