class Clear {
    constructor(text, x, y, color) {
        this.decision = text  = if(clearpoint == 5){text ="CLEAR"};
        this.x = x;
        this.y = y;
        this.color = color;
    }


    draw(ctx) {

        ctx.font = "30px Arial";
        ctx.fillStyle = this.color;
        ctx.fillText(this.decision, this.x, this.y);
    }


}