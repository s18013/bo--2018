const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;
const SPF = 1000 / 60;
const PADDLE_SPEED = 5;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 20;

const input = new Input();
const ball = new Ball(400, 300, 10, 'red');
const paddle = new Paddle(400, 550, 80, 10, 'deepskyblue');

const blocks1 = [];
const blocks2 = [];
const blocks3 = [];
const blocks4 = [];
const blocks5 = [];

const score =　new Score(0, 700, 40, "lime");




let getscore = 0;
let clearpoint = 0;



blocks1.push(new Block(200, 40, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks2.push(new Block(600, 40, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks3.push(new Block(600, 80, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks4.push(new Block(500, 60, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks5.push(new Block(300, 70, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));

window.setInterval(game_tick, SPF);

function game_tick() {
    // 入力状況に応じた呼び出し
    if (input.space) {
        ball.start(5);
    }
    if (input.left) {
        paddle.move(-PADDLE_SPEED);
    }
    if (input.right) {
        paddle.move(PADDLE_SPEED);
    }


    // ボールの移動
    ball.move();

    // ボールとブロックの当たり判定
    paddle.collide(ball);
    // ボールとブロックの当たり判定
    blocks1_collide();
    blocks2_collide();
    blocks3_collide();
    blocks4_collide();
    blocks5_collide();

    // 各種オブジェクトの描画
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    paddle.draw(ctx);
    ball.draw(ctx);
    blocks1.forEach((block) => block.draw(ctx));
    blocks2.forEach((block) => block.draw(ctx));
    blocks3.forEach((block) => block.draw(ctx));
    blocks4.forEach((block) => block.draw(ctx));
    blocks5.forEach((block) => block.draw(ctx));
    score.draw(ctx);
    clear.draw(ctx);


}



function blocks1_collide() {

    //動作確認用のサンプルコード
    if (blocks1[0] && blocks1[0].collide(ball)) {
        blocks1.splice(0, 1);
    }
}

function blocks2_collide() {
    //動作確認用のサンプルコード
    if (blocks2[0] && blocks2[0].collide(ball)) {
        blocks2.splice(0, 1);
    }
}
function blocks3_collide() {
    //動作確認用のサンプルコード
    if (blocks3[0] && blocks3[0].collide(ball)) {
        blocks3.splice(0, 1);
    }
}
function blocks4_collide() {
    //動作確認用のサンプルコード
    if (blocks4[0] && blocks4[0].collide(ball)) {
        blocks4.splice(0, 1);
    }
}
function blocks5_collide() {
    //動作確認用のサンプルコード
    if (blocks5[0] && blocks5[0].collide(ball)) {
        blocks5.splice(0, 1);
    }
    else {

    }
}