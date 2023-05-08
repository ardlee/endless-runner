/*
Arthur Lee
Endless Runner

*/


let config = {
    type: Phaser.CANVAS,
    // width: 640,
    width: 1518,
    height: 722,
    scene: [ Menu, Play, Instructions ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE,keyI, keyW, keyA, keyS, keyD, keyESC, keyENTER, mouseClick;