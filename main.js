Canvas = document.getElementById("parking_canvas");
ctx = Canvas.getContext("2d");
blue_car_W = 150;
blue_car_H = 300;
blue_car_X = 1;
blue_car_Y = 400;
blue_car_img = "Blue car.jpg";

canvas_bg = "Parking lot bg.jpg";

purple_car_img = "Purple car.jpg";

red_car_img = "Red car.jpg";

function add(){
    Bg = new Image();
    Bg.onload = uploadBG;
    Bg.src = canvas_bg;

    Mcar = new Image();
    Mcar.onload = uploadMcar;
    Mcar.src = blue_car_img;

    Pcar = new Image();
    Pcar.onload = uploadPcar;
    Pcar.src = purple_car_img;

    Rcar = new Image();
    Rcar.onload = uploadRcar;
    Rcar.src = red_car_img;
}

function uploadBG(){
    ctx.drawImage(Bg, 0, 0, Canvas.width, Canvas.height);
}

function uploadMcar(){
    ctx.drawImage(Mcar, blue_car_X, blue_car_Y, blue_car_W, blue_car_H);
}

function uploadPcar(){
    ctx.drawImage(Pcar, 245, 90, 125, 275);
}

function uploadRcar(){
    ctx.drawImage(Rcar, 400, 90, 300, 300);
}

window.addEventListener("keydown", myarrowkeydown);

function myarrowkeydown(e){
    arrowkeyP = e.keyCode;
    console.log(arrowkeyP);

    if (arrowkeyP == '37'){
        arrowleft();
        console.log("Left Arrow key is pressed");
    }

    if (arrowkeyP == '38'){
        arrowup();
        console.log("Up Arrow key is pressed");
    }

    if (arrowkeyP == '39'){
        arrowright();
        console.log("Right Arrow is pressed");
    }

    if (arrowkeyP == '40'){
        arrowdown();
        console.log("Down Arrow is pressed");
    }
}

function arrowleft(){
    if (blue_car_X >= 0){
        blue_car_X = blue_car_X - 10;
        console.log("when left is pressed, X position of blue car is" + blue_car_X + ",Y position of blue car is"+ blue_car_Y);
        uploadBG();
        uploadMcar();
        uploadPcar();
        uploadRcar();
        
    }
}

function arrowright(){
    if (blue_car_X <= 825){
        blue_car_X = blue_car_X + 10;
        console.log("when right is pressed, X position of blue car is" + blue_car_X + ",Y position of blue car is"+ blue_car_Y);
        uploadBG();
        uploadMcar();
        uploadPcar();
        uploadRcar();
        
    }
}

function arrowup(){
    if (blue_car_Y >= 0){
        blue_car_Y = blue_car_Y - 10;
        console.log("when up is pressed, Y position of blue car is" + blue_car_Y + ",X position of blue car is"+ blue_car_X);
        uploadBG();
        uploadMcar();
        uploadPcar();
        uploadRcar();
        
    }
}

function arrowdown(){
    if (blue_car_Y <= 725){
        blue_car_Y = blue_car_Y + 10;
        console.log("when up is pressed, Y position of blue car is" + blue_car_Y + ",X position of blue car is"+ blue_car_X);
        uploadBG();
        uploadMcar();
        uploadPcar();
        uploadRcar();
        
    }
}