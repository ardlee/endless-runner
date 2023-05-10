class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    
    preload() {
        //load assets
        this.load.image('player', './assets/Player (1).png');
        // this.load.image('enemy', './assets/Enemy.png');
        
    }


    create() {
        this.gameOver = false;
        
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.image(0, 0, 'player').setOrigin(0, 0);
        this.add.image(0, 0, 'enemy').setOrigin(0, 0);

        // this.player = this.physics.add.image(200, 150, 'player').setVelocity(SPEED, 0);


        this.player = new Player(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player').setOrigin(0.5, 1);

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        game.input.mouse.capture = true;

        let menuConfig2 = {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#3352F',
            color: '#843605',
            allign: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0,
        }
        
        this.add.text(game.config.width/2, game.config.height/2, 'Play', menuConfig2).setOrigin(0.5);
        
    }
    
    
    
    
    update() {
        // this.pointerMove ( this.input.activePointer);
        // velocityFromRotation(this.rotation, SPEED, this.player.body.velocity);
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.sound.play('synth'); 
            this.scene.start('menuScene');
        }

        if (!this.gameOver){
            this.player.update();
            //this.enemy.update();
        }

        // add listener for the 'keydown' event
        // game.input.keyboard.onDownCallback = function(event) {
        //     if (event.keyCode === Phaser.Keyboard.ESC) {
        //     game.paused = !game.paused; // toggle pause state
        //     this.add.text(game.config.width/2, game.config.height/2, 'Paused', menuConfig2).setOrigin(0.5);
        //     }
        // };
  
        
    }
    // pointerMove (pointer){
    //     var angleToPointer = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.worldX, pointer.WorldY);
    //     var angleDelta = Phaser.Math.Angle.Wrap(angleToPointer - this.player.rotation);
          
    //     if (Phaser.Math.Fuzzy.Equal(angleDelta, 0, TOLERANCE)) {
    //         this.player.rotation = angleToPointer;
    //         this.player.setAngularVelocity(0);
    //     } else {
    //         this.player.setAngularVelocity(Math.sign(angleDelta) * ROTATION_SPEED_DEGREES);
    //     }
    // }
   
}
