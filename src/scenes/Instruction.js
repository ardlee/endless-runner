class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }

    preload() {
        //load assets
    }

    create() {

        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '30px',
            backgroundColor: '#3352F',
            color: '#843605',
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

        this.add.text(game.config.width/2, 100, 'Instructions', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 150, 'Use (WASD) to move', menuConfig2).setOrigin(0.5);
        this.add.text(game.config.width/2, 175, "Aim and fire using your mouse and left click ", menuConfig2).setOrigin(0.5);
        this.add.text(game.config.width/2, 200, "Press (esc) at any time to return to the menu ", menuConfig2).setOrigin(0.5);
        this.add.text(game.config.width/2, 250, "Survive as long as possible and destroy enemy ships", menuConfig2).setOrigin(0.5);
        this.add.text(game.config.width/2, 275, "for more points", menuConfig2).setOrigin(0.5);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.sound.play('blipSelect'); 
            this.scene.start('menuScene');
        }
    }

}