img = "";
status = "";

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    cv=createCanvas(640,420);
    cv.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}

function modelLoaded()
{
    console.log("cocossd status == Initialised.");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}

function draw()
{
    image(img,0,0,640,420);

    fill("#FF0000");
    text("Dog",165,70);
    stroke("#FF0000");
    noFill();
    rect(150,50,300,300);
}