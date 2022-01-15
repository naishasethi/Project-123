leftWristX=0;
rightWristX=0;
difference=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400);
    canvas.position(560,120);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function modelloaded() {
    console.log("Posenet is initialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left Wrist X= "+leftWristX+", Right Wrist X= "+rightWristX+", Difference = "+difference);
    }
}
function draw() {
    background("#9ceb34");
    fill("#e86f51");
    text("Naisha", 50, 200);
    textSize(difference);
    document.getElementById("font_size").innerHTML="FOnt size of the text = "+difference+"px";
}