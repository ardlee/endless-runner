class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load assets
        this.load.audio('blipSelect', './assets/blipSelect.wav')
        this.load.audio('synth', './assets/synth.wav')
        this.load.image('bullet', './assets/bullet (1).png')
        this.load.image('player', './assets/Player (1) (1).png');
        this.load.image('enemy', './assets/enemy.png');
    }


    create() {

        this.input.setDefaultCursor('url(assets/Target.cur), pointer');
        
        //menu text configuration
        let menuConfig = {
            fontFamily: 'Slab serif',
            fontSize: '100px',
            backgroundColor: '#000000',
            color: '#4D080B',
            allign: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0,
        }
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

        let menuConfig3 = {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#3352F',
            color: '#FFFFFF',
            allign: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0,
        }

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        //menu text and colors
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'The Game', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press (I) for instructions', menuConfig3).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press (ENTER) to play', menuConfig2).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize+5 + borderPadding*2, "Made by Arthur Lee ", menuConfig2).setOrigin(0.5);
    }


    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
       
            // game.settings = {
            //     spaceshipSpeed: 3,
            //     fastShipSpeed:6,
            //     gameTimer: 60000
            // }

            this.sound.play('blipSelect');   
            this.scene.start('playScene');
        }

        if (Phaser.Input.Keyboard.JustDown(keyI)) {
            this.sound.play('blipSelect'); 
            this.scene.start('instructionScene');
        }
    }
}

// class Player extends Phaser.GameObjects.Sprite {
//     constructor(scene, x, y, texture, frame) {
//         super(scene, x, y, texture, frame);

//         // add object to the existing scene
//         scene.add.existing(this);   // add to existing, displayList, updateList
//         this.isFiring = false;      // tracks if player is firing
//                                     // when the player fires they must wait a half second to fire again
//         this.moveSpeed = 4;         // pixels per frame

//         // this.sfxFire = scene.sound.add('sfx_fire'); // add rocket sfx

//     } 

// }

// class Instructions extends Phaser.Scene {
//     constructor() {
//         super("instructionScene");
//     }

//     preload() {
//         //load assets
//     }

//     create() {

//         this.add.text(game.config.width/2, game.config.height/2, 'Instructions', menuConfig2).setOrigin(0.5);
//     }

// }