function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}
paint = 0;
white = 100;
black = 0;
function draw() {
  //background(10,0,97);
  stroke(0,0,100);
  fill(10,100,100);
  square(0,0,20);
  fill(30,100,100);
  square(0,20,20);
  fill(60,100,100);
  square(0,40,20);
  fill(105,100,100);
  square(0,60,20);
  fill(180,100,100);
  square(0,80,20);
  fill(240,100,100);
  square(0,100,20);
  fill(300,100,100);
  square(0,120,20);
  fill(15,100,50);
  square(0,140,20);
  fill(10,0,100);
  square(0,160,20);
  fill(10,100,0);
  square(0,180,20);
  if(mouseIsPressed&&mouseX<=20&&mouseY<=20){
    paint = 10;
    black = 100;
    white = 100;
    }
  else if(mouseIsPressed&&mouseX<=20&&mouseY<=40&&mouseY>20){
    paint = 30;
    black = 100;
    white = 100;
    }
    else if(mouseIsPressed&&mouseX<=20&&mouseY<=60&&mouseY>40){
      paint = 60;
      black = 100;
      white = 100;
      }
      else if(mouseIsPressed&&mouseX<=20&&mouseY<=80&&mouseY>60){
        paint = 105;
        black = 100;
        white = 100;
        }
        else if(mouseIsPressed&&mouseX<=20&&mouseY<=100&&mouseY>80){
          paint = 180;
          black = 100;
          white = 100;
          }
          else if(mouseIsPressed&&mouseX<=20&&mouseY<=120&&mouseY>100){
            paint = 240;
            black = 100;
            white = 100;
            }
            else if(mouseIsPressed&&mouseX<=20&&mouseY<=140&&mouseY>120){
              paint = 300;
              black = 100;
              white = 100;
              }
              else if(mouseIsPressed&&mouseX<=20&&mouseY<=160&&mouseY>140){
                paint = 15;
                black = 50;
                white = 100;
                }
                else if(mouseIsPressed&&mouseX<=20&&mouseY<=180&&mouseY>160){
                  paint = 0;
                  black = 100;
                  white = 0;
                  }
                  else if(mouseIsPressed&&mouseX<=20&&mouseY<=200&&mouseY>180){
                    paint = 0;
                    black = 0;
                    white = 100;
                    }
  else if(mouseIsPressed==true){
    push(); 
    stroke(paint,white,black);
    strokeWeight(10);
    line(mouseX,mouseY,pmouseX,pmouseY);
    pop();
  }
 
}
