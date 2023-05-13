class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        // this.playScene.physics.world.enable(this);
    }
    

    
    preload() {
        //load assets
        this.load.image('player', './assets/Player (1).png');
        this.load.spritesheet('playerMove', './assets/Player (1) (2).png', {frameWidth: 32, frameHeight: 32, startFrame: 1, endFrame: 2 });
        this.load.spritesheet('enemyMove', './assets/enemy (1).png', {frameWidth: 32, frameHeight: 32, startFrame: 1, endFrame: 3 });
        // this.load.image('enemy', './assets/Enemy.png');
        
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


        this.score = 0;
        this.scoreText = this.add.text( 550, 50, 'score: 0', menuConfig3).setOrigin(0.5);
        this.gameOver = false;


        this.bulletAmount = 0;
        this.bulletText = this.add.text(80, 50, 'Bullets Fired:', menuConfig3).setOrigin(0.5);
        
        // this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.image(0, 0, 'player').setOrigin(0, 0);
        // this.add.image(0, 0, 'enemy').setOrigin(0, 0);
        this.enemy1 = this.physics.add.existing(new Enemy(this, 700, 300, 'enemy').setOrigin(0.5, 1));
        this.enemy1.angle = 90;
        this.enemy2 = this.physics.add.existing(new Enemy2(this, 0, 40, 'enemy').setOrigin(0.5, 1));
        this.enemy2.angle = 270;
        this.enemy3 = this.physics.add.existing(new Enemy3(this, 200, 0, 'enemy').setOrigin(0.5, 1));
        this.enemy4 = this.physics.add.existing(new Enemy4(this, 500, 800, 'enemy').setOrigin(0.5,1));
        this.enemy4.angle = 180;
        // this.player = this.physics.add.image(200, 150, 'player').setVelocity(SPEED, 0);


        // this.player = new Player(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player').setOrigin(0.5, 1);
        this.gun = this.physics.add.image(300, 400, 'player');
    
        this.gun.moveSpeed = 9;
        // this.player= this.physics.add.image(400, 300, 'player');
  
        // this.key_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // this.key_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        this.bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: 10000,
        runChildUpdate: true
        });
    
    this.input.on("pointermove", function(pointer) {
      var angle = Math.atan2(pointer.y - this.gun.y, pointer.x - this.gun.x) * 180 / Math.PI;
      this.gun.angle = angle;
    }, this);
    
    this.input.on("pointerdown", (event) => {
       
        this.bullet = this.bullets.get();

      if(this.bullet) {
        this.sound.play('synth');
        let offset = new Phaser.Geom.Point(0, -this.gun.height / 2);
        Phaser.Math.Rotate(offset, this.gun.rotation);
        this.bullet.fire(this.gun);
        this.bulletAmount +=1;

      }
      else{
        this.sound.play('blipSelect');
        
      }
    });

    this.bullets.enableBody = true;
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        game.input.mouse.capture = true;



        
        this.add.text(game.config.width/2, game.config.height/2, 'Play', menuConfig2).setOrigin(0.5);

        
    }
    
    
    
    
    update() {

       
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.sound.play('synth'); 
            this.scene.start('menuScene');
        }


        if( this.checkCollision(this.gun,this.enemy1)){
            this.gameOver = true;
            // this.sound.play('dead');
        }
        if( this.checkCollision(this.gun,this.enemy2)){
            this.gameOver = true;
            // this.sound.play('dead');
        }
        if( this.checkCollision(this.gun,this.enemy3)){
            this.gameOver = true;
            // this.sound.play('dead');
        }
        if( this.checkCollision(this.gun,this.enemy4)){
            this.gameOver = true;
            // this.sound.play('dead');
        }

        // if( this.checkCollision2(this.bullets,this.enemy1)){
        //     this.enemy1.reset();
        //     console.log('hit');
        //     // this.sound.play('dead');
        // }
        // if( this.checkCollision2(this.bullets,this.enemy2)){
        //     this.enemy2.reset();
        //     // this.sound.play('dead');
        // }
        // if( this.checkCollision2(this.bullets,this.enemy3)){
        //     this.enemy3.reset();
        //     // this.sound.play('dead');
        // }
        // if( this.checkCollision2(this.bullets,this.enemy4)){
        //     this.enemy4.reset();
        //     // this.sound.play('dead');
        // }

        if(this.physics.overlap(this.bullets, this.enemy1, this.enemyHit, null, this)){
            this.enemy1.reset();
            this.enemy1.visible=true;
        }
        if(this.physics.overlap(this.bullets, this.enemy2, this.enemyHit, null, this)){
            this.enemy2.reset();
            this.enemy2.visible = true;
        }
        if(this.physics.overlap(this.bullets, this.enemy3, this.enemyHit, null, this)){
            this.enemy3.reset();
            this.enemy3.visibe =true;
        }
        if(this.physics.overlap(this.bullets, this.enemy4, this.enemyHit, null, this)){
            this.enemy4.reset();
            this.enemy4.visible=true;
        }


        if (!this.gameOver){
            if (keyA.isDown && this.gun.x >= 30) {
                this.gun.x -= this.gun.moveSpeed;
            }
            if (keyD.isDown && this.gun.x <= 570) {
                this.gun.x += this.gun.moveSpeed;
            }
        // }
        // if ( !this.isFiring){
            if (keyW.isDown && this.gun.y >= 30){
                    this.gun.y -= this.gun.moveSpeed;
                }
            if (keyS.isDown && this.gun.y <= 700){
                this.gun.y += this.gun.moveSpeed;
            }
          
            
            // this.player.update();
            this.gun.update();
            this.enemy1.update();
            this.enemy2.update();
            this.enemy3.update();
            this.enemy4.update();

        
            
            // if( game.input.activePointer.isDown){
            //     this.bulletAmount -=1;
            // }
            this.bulletText.text = "Bullets Fired:" + this.bulletAmount;
   
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

        this.scoreText.text = 'score:' + this.score;

        


        if( this.gameOver){
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', menuConfig2).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (esc) to go back', menuConfig2).setOrigin(0.5);
            this.enemy1.destroy();
            this.enemy2.destroy();
            this.enemy3.destroy();
            this.enemy4.destroy();
        }
        
    }


    checkCollision(player, enemy) {

        // simple AABB checking
        if (player.x < enemy.x + enemy.width && 
          player.x + player.width > enemy.x && 
          player.y < enemy.y + enemy.height &&
          player.height + player.y > enemy. y) {
          return true;
        } else {
          return false;
        }
      }

    checkCollision2(bullet, enemy) {

    // simple AABB checking
    if (bullet.x < enemy.x + enemy.width && 
        bullet.x + bullet.width > enemy.x && 
        bullet.y < enemy.y + enemy.height &&
        bullet.height + bullet.y > enemy. y) {
            console.log('hit');
        return true;
    } else {
        return false;
    }
    }
    enemyHit(bullet, enemy) {
        this.score += 10;
        // bullet.destroy();
        enemy.visble=true;
        
    }
   
}
