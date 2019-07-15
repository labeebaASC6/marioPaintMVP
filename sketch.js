var sqr1X = 0;
var sqr1Y = 0;
var yPos = 60;
var widthSqr = 40;
var heightSqr = 30;
var colorNum = "white";

function setup()
{
    createCanvas(500, 500);
    background(0, 0, 0);
}
function draw()
{
    fill("red");
    rect(20, yPos, widthSqr, heightSqr);

    fill("green");
    rect(80, yPos, widthSqr, heightSqr);

    fill("blue");
    rect(140, yPos, widthSqr, heightSqr);
}
function mouseClicked()
{
    var x = mouseX;
    var y = mouseY;
    if(x >= 20 && x <= 20 + widthSqr && y >= yPos && y <= yPos + heightSqr)
    {
        colorNum = "red";
        console.log("red");
    }
    if(x >= 80 && x <= 80 + widthSqr && y >= yPos && y <= yPos + heightSqr)
    {
        colorNum = "green";
        console.log("green")
    }
    if(x >= 140 && x <= 140 + widthSqr && y >= yPos && y <= yPos + heightSqr)
    {
        colorNum = "blue";
        console.log("blue");
    }        
}
function mouseDragged()
{
    fill(colorNum);
    circle(mouseX, mouseY, random(100));
}