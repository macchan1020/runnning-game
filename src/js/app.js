require('../css/app.css');
require('../scss/style.scss');

import { init, Sprite, SpriteSheet, GameLoop, initKeys, keyPressed } from "kontra";
//kontra.jsから必要なものを追加、キー操作に必要なものもスプライトシート画像追加

let { canvas } = init();
initKeys();

const maxUp = 40;
const gravityY = 1.7;
const jumpPower = 4;

const scoreTextBox = document.getElementById("score");
const helpMessage = document.getElementById("help-message")

let upScore = 0;
let distance = 0;

let isOver = false;
let loop;
let blockSpeed = 3;//x軸方向の

function updateScore() {
  scoreTextBox.innerHTML = Math.floor(distance);
}

function jump(sprite) {
  upScore++;

  if(upScore < maxUp) {
    sprite.playAnimation("jump");
    sprite.y -= jumpPower;
  }
}
//無かったら2回ジャンプ出来る
function stopJump(sprite) {
  upScore = maxUp;
}

function jumpCoolOff(sprite) {
  sprite.playAnimation("walk");
  upScore = 0;
}

function gravity(sprite) {
  sprite.y += gravityY;
}
//障害物
let block = Sprite({
  x: canvas.width,
  y: canvas.height - 50,
  color: "#ff0",
  width: 30,
  height: 20,
  dx: -blockSpeed,
  anchor: {x: 1, y: 1}
});


let ground = Sprite({
  x: 0,
  y: canvas.height - 50,
  color: "#0DCCFF",
  width: canvas.width,
  height: 50
});

let image = new Image();
image.src = "images/character_walk_sheet.png";
//画像を読み終わってからループする
image.onload = function() {
//画像の中から自動で番号が振られる
  let spriteSheet = SpriteSheet({
    image: image,
    frameWidth: 82,
    frameHeight: 105,
    animations: {
      walk: {
        frames: "0..2",
        frameRate: 10
      },
      jump: {
        frames: "0..2",
        frameRate: 21,
      }
    }
  });

  let player = Sprite({
    x: canvas.width / 4,
    y: 500,//ペンギンの位置上から
    anchor: {x: 0.3, y: 0.5},

    animations: spriteSheet.animations
  });

  loop = GameLoop({
    update: function() {
      if(keyPressed("up")) {
        console.log("up");
        jump(player);
      } else {
        stopJump(player);
      }

      if(player.y < 500) {
        gravity(player);
      } else {
        jumpCoolOff(player);
      }

      
      player.update();
      block.update();
      //左に流れるように
      if(block.x < 0) {
        block.x = canvas.width;
      }
      //衝突判定
      if(player.collidesWith(block)) {
        console.log("collide");
        distance = 0;

        isOver = true;

        loop.stop();
        helpMessage.innerHTML = "Enterを押してください";
        
      } else {
        distance += 0.2;
      }

      updateScore();

      if(Math.floor(distance) % 2 == 0) {
        block.dx = -Math.random() * blockSpeed - 3;
      }

      if(distance > 200) {
        isOver = true;
        loop.stop();
        helpMessage.innerHTML = "クリア!!もう一度やる: Enterを押してください。";
      }

    },
    render: function() {
      player.render();
      ground.render();
      block.render();

    }
  });
  
  loop.start();
};

document.addEventListener("keyup", function(k) {
  if(isOver && k.code == "Enter") {
    loop.start();
    isOver = false;
    console.log("Enterを押してください。");

    block.x = canvas.width;
    helpMessage.innerHTML = "";

    distance = 0;
    
  }
});

