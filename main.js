function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function modelloaded() {
    console.log("Posenet is initialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
function draw() {
    background("#9ceb34");
}