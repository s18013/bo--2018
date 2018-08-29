class Score {
    constructor(text, x, y, color) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.color = color;
    }


    draw(ctx) {

        ctx.font = "16px Arial";
        ctx.fillStyle = this.color;
        ctx.fillText("score " + getscore , this.x, this.y);
    }

}