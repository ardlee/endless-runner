class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }

    preload() {
        //load assets
    }

    create() {

        this.add.text(game.config.width/2, game.config.height/2, 'Instructions', menuConfig2).setOrigin(0.5);
    }

}