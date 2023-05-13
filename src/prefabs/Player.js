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
  

  
//   create() {
//     this.gun = this.physics.add.image(400, 300, 'gun');
  
//     this.key_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
//     this.key_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
//     this.bullets = this.physics.add.group({
//       classType: Bullet,
//       maxSize: 10,
//       runChildUpdate: true
//     });
    
//     this.input.on("pointermove", function(pointer) {
//       var angle = Math.atan2(pointer.y - this.gun.y, pointer.x - this.gun.x) * 180 / Math.PI;
//       this.gun.angle = angle;
//     }, this);
    
//     this.input.on("pointerdown", (event) => {
//       let bullet = this.bullets.get();

//       if(bullet) {
//         let offset = new Phaser.Geom.Point(0, -this.gun.height / 2);
//         Phaser.Math.Rotate(offset, this.gun.rotation);
//         bullet.fire(this.gun);
//       }
//     });
//   }
  
//   update() {
//     console.log("done");
//     if(this.key_left.isDown) {
//       this.gun.angle -= 1;
//     } else if(this.key_right.isDown) {
//       this.gun.angle += 1;
//     }

//     // if (!this.isFiring) {
//             if (keyA.isDown && this.x >= borderUISize + this.width) {
//                 this.x -= this.moveSpeed;
//             }
//             if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
//                 this.x += this.moveSpeed;
//             }
//         // }
//         // if ( !this.isFiring){
//             if (keyW.isDown && this.y >= borderUISize + this.width){
//                     this.y -= this.moveSpeed;
//                 }
//             if (keyS.isDown && this.y <= 670){
//                 this.y += this.moveSpeed;
//             }
//   }
}



// class PlayerBullet extends Phaser.GameObjects.Sprite {
//     constructor(scene, x, y, texture, frame) {
//         super(scene, x, y, texture, frame);
//         scene.add.existing(this);
//     }

//     update() {

//         let xDist = this.game.input.mousePointer.x - this.x;
//         let yDist = this.game.input.mousePointer.y - this.y;
//         let angle = Math.atan(yDist/xDist);

//         this.projectile_sprite.setVelocityX(yDist);
//         this.projectile_sprite.setVelocityY(xDist);

//         this.physics.moveTo(this.PlayerBullet, this.game.input.mousePointer.x,
//             this.game.input.mousePointer.y);        //set for one instance, dont keep updating mouse location
//     }
// }