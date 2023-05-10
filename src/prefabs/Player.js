class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // tracks if player is firing
                                    // when the player fires they must wait a half second to fire again
        this.moveSpeed = 9;         // pixels per frame
        

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

            // if (keyA.isDown) {
            //     player.setVelocityX(-200);
            // } else if (keyD.isDown) {
            //     player.setVelocityX(200);
            // } else {
            //     player.setVelocityX(0);
            // }
        
            // if (keyW.isDown) {
            //     player.setVelocityY(-200);
            // } else if (keyS.isDown) {
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