//Declare
var xPos = 10;
var speed = 10;


function setup() {
  myCanvas = createCanvas (600,400);
  myCanvas.position(0,0);
  myCanvas.style('z-index',-1);
  background(250, 250, 100);

}

function draw (){
  background (150, 200, xPos);
  stroke (155,0,150);
  strokeWeight (5);
  //noFill();
  rect (300,200,100,100);
  if (mouseX >200){
    noStroke()
  }

  //fill (250,200,200);
  ellipse(xPos, mouseY,100,100) ;

  ellipse(mouseX,mouseY,25,25);
  if(mouseIsPressed){
    fill (random(mouseX),random (100),random (300));
  }

  //if (mouseX > 300) {

    //fill (255,0,0);
    //line (0,0,600,400);

  //}else if (mouseX > 200){

    //fill (255,mouseIsPressed,0);
    //rect (200,200, 100,100);

  //}

  //rect (300,200,100,100);



  //this is the circle

  //fill (100,50,200);
  ellipse (mouseX, 100,xPos,mouseY);
  ellipse (100, xPos, 100, xPos);

  //xPos = xPos + 5;
  xPos = xPos + speed;
  //Same as top different way of coding, xPos +=Speed

  if (xPos > width || xPos <0) {
    speed= speed * -1;
    //speed *=-1


  }
  if (mouseIsPressed){
    fill(random (255), random (255), random (255));
  }

  //something callled width = canvas width
  //something called height = canvas heigth
  //if xPos is greater than 600 or less than 0
  //symbol for or ||, can also &&

  //if XPos is greater than 600 or less than 0

  //When the circle gets to the end of the canvas, reverse

  //This is the square
  //fill (200,250,200);
  //rect (400,100,50,50);

  //console.log(mouseX);
}
