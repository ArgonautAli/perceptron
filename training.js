class Points{
    constructor(){
        this.x = x;
        this.y = y;
        this.label = label;
    }

    point(){
        this.x = Math.random(width)
        this.y = Math.random(height)

        if(x > y){
            label = 1;
        } else {
            label = -1
        }
    }

    show(){
        stroke(0);

        if(this.label === 255){
            fill(255);
        } else {
            fill(0)
        }
    }

}

