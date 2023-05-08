class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }

    preload() {
        //load assets
    }

    create() {
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

        this.add.text(game.config.width/2, game.config.height/2, 'Instructions', menuConfig2).setOrigin(0.5);
    }

}