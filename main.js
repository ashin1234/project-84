canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img= "racing.jpg";
car1_img="car1.png";
car2_img="car2.png"
car1_x=10;
car2_x=10
car1_y=10;
car2_y=110;
car1_width=100;
car2_width=100;
car1_height=90;
car2_height=90;
function add(){
     background_imgTag=new Image();
     background_imgTag.onload=uploadBackground;
     background_imgTag.src=background_img;

     car1_imgTag=new Image();
     car1_imgTag.onload=uploadCar1;
     car1_imgTag.src=car1_img;

     car2_imgTag=new Image();
     car2_imgTag.onload=uploadCar2;
     car2_imgTag.src=car2_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37"){
        car1Left();
        console.log("left arrow is pressed");
    }
    if(keyPressed=="38"){
        car1Up();
        console.log("Up arrow is pressed");
    }
    if(keyPressed=="39"){
        car1Right();
        console.log("Right arrow is pressed");
    }
    if(keyPressed=="40"){
        car1Down();
        console.log("Down arrow is pressed");
    }
    if(keyPressed=="65"){
        car2Left();
        console.log("A is pressed");
    }
    if(keyPressed=="87"){
        car2Up();
        console.log("W is pressed");
    }
    if(keyPressed=="68"){
        car2Right();
        console.log("D is pressed");
    }
    if(keyPressed=="83"){
        car2Down();
        console.log("S is pressed");
    }
}
function car1Up(){
    if(car1_y>0 ){
        car1_y=car1_y-10;
        console.log("when up arrow is pressed x="+car1_x+",y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car2Up(){
    if(car2_y>0 ){
        car2_y=car2_y-10;
        console.log("when W is pressed x="+car2_x+",y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function car1Down(){
    if(car1_y<500 ){
        car1_y=car1_y+10;
        console.log("when down arrow is pressed x="+car1_x+",y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car2Down(){
    if(car2_y<500 ){
        car2_y=car2_y+10;
        console.log("when S is pressed x="+car2_x+",y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function car1Left(){
    if(car1_x>0 ){
        car1_x=car1_x-10;
        console.log("when left arrow is pressed x="+car1_x+",y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car2Left(){
    if(car2_x>0 ){
        car2_x=car2_x-10;
        console.log("when A is pressed x="+car2_x+",y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function car1Right(){
    if(car1_x<700){
        car1_x=car1_x+10;
        console.log("when right arrow is pressed x="+car1_x+",y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car2Right(){
    if(car2_x<700){
        car2_x=car2_x+10;
        console.log("when D is pressed x="+car2_x+",y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}