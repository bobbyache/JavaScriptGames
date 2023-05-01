window.addEventListener("load", function () {
  // canvas setup
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class InputHandler {
    constructor(game) {
      this.game = game;
      window.addEventListener("keydown", (e) => {
        // if key is "arrow up" and arrow up key not yet stored, store it.
        if (e.key === "ArrowUp" && this.game.keys.indexOf(e.key) === -1) {
          this.game.keys.push(e.key);
        }
        // adding more keys is easy...
      });
      window.addEventListener("keyup", (e) => {
        // if the key is present in the array then remove it
        if (this.game.keys.indexOf(e.key) > -1) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
        }
      });
    }
  }

  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0.2;
    }

    update() {
      this.y += this.speedY;
    }

    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler(this);
      // all keys that are currently active
      this.keys = [];
    }

    update() {
      this.player.update();
    }

    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  // animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);

    // calling animate will enter an endless animation loop.
    window.requestAnimationFrame(animate);
  }

  animate();
});
