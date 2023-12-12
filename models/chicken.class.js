class Chicken extends MoveableObject {
  height = 100;
  width = 60;
  y = 330;
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  chicken_sound = new Audio("audio/chicken.mp3");
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

    this.x = 200 + Math.random() * 500;
    this.loadImages(this.IMAGES_WALKING);
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      this.moveLeft();
      // this.chicken_sound.play();
      // this.chicken_sound.volume = 0.015;
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}
