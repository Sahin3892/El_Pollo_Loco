class MoveableObject {
  x = 120;
  y = 230;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  sppedY = 0;
  acceleration = 2.5;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.sppedY > 0) {
        this.y -= this.sppedY;
        this.sppedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 230;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  /**
   *
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    // Walk animation
    let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
