const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
////////////////////////////////////////

ctx.beginPath();
ctx.moveTo(200,400);
ctx.lineTo(300,400);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,400);
ctx.lineTo(200,270);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300,400);
ctx.lineTo(300,270);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,270);
ctx.lineTo(300,270);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,270);
ctx.lineTo(255,170);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(255,170);
ctx.lineTo(300,270);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(255,170);
ctx.lineTo(255,70);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(255,170);
ctx.lineTo(330,110);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(330,110);
ctx.lineTo(255,70);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(255,170);
ctx.lineTo(180,110);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(180,110);
ctx.lineTo(255,70);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(255,150);
ctx.lineTo(287,145); ////////bok góra
ctx.stroke();

ctx.beginPath();
ctx.moveTo(287,145);
ctx.lineTo(255,130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255,130);
ctx.lineTo(305,130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(305,130);
ctx.lineTo(255,110);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255,110);
ctx.lineTo(305,95);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(305,95);
ctx.lineTo(255,85);
ctx.stroke();
/// lewy bok 
ctx.beginPath();
ctx.moveTo(255,150);
ctx.lineTo(225,145);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,145);
ctx.lineTo(255,130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255,130);
ctx.lineTo(205,130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(205,130);
ctx.lineTo(255,110);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255,110);
ctx.lineTo(205,95);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(205,95);
ctx.lineTo(255,85);
ctx.stroke();
// kółka
ctx.beginPath()
ctx.arc(250,350,15,0, Math.PI * 2);
ctx.stroke();

ctx.beginPath()
ctx.arc(250,310,15,0, Math.PI * 2);
ctx.stroke();
// trojkaty
ctx.beginPath();
ctx.moveTo(225,400);
ctx.lineTo(245,420);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,400);
ctx.lineTo(205,420);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(245,420);
ctx.lineTo(205,420);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(275,400);
ctx.lineTo(295,420);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(275,400);
ctx.lineTo(255,420);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255,420);
ctx.lineTo(295,420);
ctx.stroke();
////////////// Koniec 1 obrazka
ctx.beginPath();
ctx.arc(500, 200, 70, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(500, 200, 100, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(750, 200, 90, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(750, 200, 120, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(615, 160, 70, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(615, 240, 70, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(615, 160, 70, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(615, 240, 70, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(615, 240, 69, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(615, 160, 69, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(615, 155, 40, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(615, 245, 40, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(575, 245);
ctx.lineTo(655, 245);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(615, 205);
ctx.lineTo(615, 285);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(586, 217);
ctx.lineTo(644, 273);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(643, 216);
ctx.lineTo(587, 274);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(575, 155);
ctx.lineTo(655, 155);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(615, 115);
ctx.lineTo(615, 195);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(586, 127);
ctx.lineTo(644, 183);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(643, 126);
ctx.lineTo(587, 184);
ctx.stroke();
////// Koniec 2 rysunku
ctx.beginPath();
ctx.arc(530, 550, 70, 0, Math.PI * 2);
ctx.stroke();                              ///kółko
ctx.beginPath();
ctx.moveTo(620, 460); //linie wewnętrzne 
ctx.lineTo(620, 640);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(620, 640);
ctx.lineTo(600, 670);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(600, 670);
ctx.lineTo(450, 670);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(450, 670);
ctx.lineTo(430, 640);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(430, 640);
ctx.lineTo(430, 460);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(430, 460);
ctx.lineTo(450, 430);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(620, 460);
ctx.lineTo(600, 430);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(600, 430);
ctx.lineTo(450, 430);
ctx.stroke();
ctx.beginPath();          /// kólka środek
ctx.arc(600, 460, 10, 0, Math.PI * 2);
ctx.stroke();  
ctx.beginPath();
ctx.arc(600, 640, 10, 0, Math.PI * 2);
ctx.stroke();  
ctx.beginPath();
ctx.arc(450, 460, 10, 0, Math.PI * 2);
ctx.stroke();  
ctx.beginPath();
ctx.arc(450, 640, 10, 0, Math.PI * 2);
ctx.stroke();  
ctx.beginPath();        /// linie zewnętrzne
ctx.moveTo(650, 430);
ctx.lineTo(650, 660);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(650, 660);
ctx.lineTo(620, 690);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(620, 690);
ctx.lineTo(420, 690);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(420, 690);
ctx.lineTo(400, 660);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400, 660);
ctx.lineTo(400, 440);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400, 440);
ctx.lineTo(430, 400);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(650, 430);
ctx.lineTo(620, 400);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(620, 400);
ctx.lineTo(430, 400);
ctx.stroke();
ctx.beginPath(); // srodek kołka
ctx.arc(530, 550, 5, 0, Math.PI * 2);
ctx.stroke();                            
ctx.beginPath();
ctx.moveTo(525, 550);
ctx.lineTo(500, 525);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(530, 545);
ctx.lineTo(505, 520);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500, 525);
ctx.lineTo(490, 535);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(490, 535);
ctx.lineTo(492, 510);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(492, 510);
ctx.lineTo(515, 515);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(515, 515);
ctx.lineTo(500, 525);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(525, 550);
ctx.lineTo(502, 583);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(530, 555);
ctx.lineTo(510, 585);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500, 580);
ctx.lineTo(500, 580);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500, 595);
ctx.lineTo(500, 580);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500, 595);
ctx.lineTo(515, 590);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(515, 590);
ctx.lineTo(500, 580);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 470);
ctx.lineTo(600, 630);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 470);
ctx.lineTo(450, 630);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(590, 640);
ctx.lineTo(460, 640);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(590, 460);
ctx.lineTo(460, 460);
ctx.stroke();

ctx.font = "italic bold 10px Arial";
ctx.strokeText("1", 530, 490);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("2", 570, 510);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("3", 585, 550);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("4", 580, 590);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("5", 555, 610);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("6", 525, 615);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("7", 490, 605);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("8", 470, 580);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("9", 465, 545);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("10", 475, 510);
ctx.font = "italic bold 10px Arial";
ctx.strokeText("11", 500, 495);





