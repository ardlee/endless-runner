class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load assets
    }


    create() {

        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

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

        // add listener for the 'keydown' event
        // game.input.keyboard.onDownCallback = function(event) {
        //     if (event.keyCode === Phaser.Keyboard.ESC) {
        //     game.paused = !game.paused; // toggle pause state
        //     this.add.text(game.config.width/2, game.config.height/2, 'Paused', menuConfig2).setOrigin(0.5);
        //     }
        // };
  
        
    }
}