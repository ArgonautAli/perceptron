let perc;
let points = [];
let amount = 500;
let trainingIndex = 0;

function setup(){
    createCanvas(800,800);
    perc = new Perceptron;

    for(let i = 0; i < amount; i++){
        points[i] = new Points();
    }

    let inputs = [-1, 0.5];
    let guess = perc.guess(inputs)

    console.log(guess);
}

function sketch(){
    background(255);
    stroke(0);
    line(0,0,width,height);
    for(let point of points){
        point.show();
        let inputs = [point.x, point.y];
        let target = point.label;
        let guess = perc.guess(inputs);
        if(guess === target){
            fill(0, 255, 0);
        } else {
            fill( 255, 0, 0);
        }
        noStroke();
        ellipse(point.x, point.y, 8,8)
    }


    let training = points[trainingIndex];
    let inputs = [training.x, training.y];
    let target = training.label;
    brain.train(inputs, target);
    trainingIndex ++;
    if (trainingIndex == points.length) {
        trainingIndex = 0;
      }

}