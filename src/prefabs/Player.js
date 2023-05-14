class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // tracks if player is firing
                                    // when the player fires they must wait a half second to fire again
        this.moveSpeed = 8;         // pixels per frame
        

        // this.sfxFire = scene.sound.add('sfx_fire'); // add rocket sfx

    } 

    update() {
        // if (!this.isFiring) {
            if (keyA.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }
            if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        // }
        // if ( !this.isFiring){
            if (keyW.isDown && this.y >= borderUISize + this.width){
                    this.y -= this.moveSpeed;
                }
            if (keyS.isDown && this.y <= 670){
                this.y += this.moveSpeed;
            }

            // if (keyA.isDown && this.x >= borderUISize + this.width) {
            //     player.setVelocityX(-200);
            // } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
            //     player.setVelocityX(200);
            // } else {
            //     player.setVelocityX(0);
            // }
        
            // if (keyW.isDown && this.y >= borderUISize + this.width) {
            //     player.setVelocityY(-200);
            // } else if (keyS.isDown && this.y <= 670) {
            //     player.setVelocityY(200);
            // } else {
            //     player.setVelocityY(0);
            // }
        // }
        
        

        // if (game.input.activePointer.isDown) {
        //     this.isFiring = true;
        //     // this.sfxRocket.play();
        // }


        // if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
        //     this.y -= this.moveSpeed;
        // }

        // if (this.y <= borderUISize * 3 + borderPadding) {
        //     this.isFiring = false;
        //     this.y = game.config.height - borderUISize - borderPadding;
        // }

 
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

}

class Bullet extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);
        Phaser.GameObjects.Sprite.call(this, scene, 0, 0, "bullet");
        this.scene.physics.world.enable(this);
        scene.add.existing(this);
    }

    fire(gun) {
        this.speed = 1000;
        this.lifespan = 3000;

        this.setActive(true);
        this.setVisible(true);

        this.rotation = gun.rotation;

        const width = gun.width / 2 + this.width / 2;
        const offset = new Phaser.Geom.Point(width, 0);
        Phaser.Math.Rotate(offset, gun.rotation);
        this.setPosition(gun.x + offset.x, gun.y + offset.y);

        const angle = Phaser.Math.DegToRad(gun.body.rotation);
        this.body.world.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);
    }

    update(time, delta) {
        this.lifespan -= delta;

        if (this.lifespan <= 0) {
          this.setActive(false);
          this.setVisible(false);
          this.body.stop();
        }
    }
}


class Gun extends Phaser.Scene {
  constructor(config) {
    super({
      key: "Player"
    });
  }
  

  
}