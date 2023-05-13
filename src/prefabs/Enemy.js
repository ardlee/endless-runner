class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        // add object to the existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        // this.isFiring = false;      // tracks if player is firing
                                    // when the player fires they must wait a half second to fire again
        this.moveSpeed = 8;         // pixels per frame
        

        // this.sfxFire = scene.sound.add('sfx_fire'); // add rocket sfx

    } 

    update() {
        this.x -= this.moveSpeed;


        // wrap around from left edge to right edge, doesnt instantly dissapear after touching edge
        if(this.x <= 0 - this.width) {
            this.reset(); 
        }
    }

    reset() {
        this.moveSpeed = Phaser.Math.Between(3,8);
        this.x = game.config.height;
        this.y = Phaser.Math.Between(0,700);
    }
}

class Enemy2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        // this.isFiring = false;      // tracks if player is firing
                                    // when the player fires they must wait a half second to fire again
        this.moveSpeed = 8;         // pixels per frame
        

        // this.sfxFire = scene.sound.add('sfx_fire'); // add rocket sfx

    } 

    update() {
        this.x += this.moveSpeed;

        if(this.x >= 700) {
            this.reset(); 
        }
    }

    reset() {
        this.moveSpeed = Phaser.Math.Between(3,8);
        this.x = -100;
        this.y = Phaser.Math.Between(0,700);
    }
}

class Enemy3 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        // this.isFiring = false;      // tracks if player is firing
                                    // when the player fires they must wait a half second to fire again
        this.moveSpeed = 8;         // pixels per frame
        

        // this.sfxFire = scene.sound.add('sfx_fire'); // add rocket sfx

    } 

    update() {
    this.y += this.moveSpeed;

        if(this.y >= 700) {
            this.reset(); 
        }
    }

    reset() {
        this.y = -100;
        this.moveSpeed = Phaser.Math.Between(3,8);
        this.x = Phaser.Math.Between(0,500);
    }

}

class Enemy4 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        // this.isFiring = false;      // tracks if player is firing
                                    // when the player fires they must wait a half second to fire again
        this.moveSpeed = 8;         // pixels per frame
        

        // this.sfxFire = scene.sound.add('sfx_fire'); // add rocket sfx

    } 

    update() {
    this.y -= this.moveSpeed;

        if(this.y <= 0) {
            this.reset(); 
        }
    }

    reset() {
        this.y = 900;
        this.moveSpeed = Phaser.Math.Between(3,8);
        this.x = Phaser.Math.Between(0,500);
    }
}