var wall,bullet,indicator,wall_thickness,bullet_speed,bullet_weight,reset





function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100,200, 50, 25);

  
  indicator = createSprite(270,45.5,10,10)

  rand = Math.round(random(223,321));
  bullet_speed = (rand)
  Rand = Math.round(random(30,52));
  bullet_weight = (Rand)
  rando = Math.round(random(22,83))
  wall_thickness = (rando)
 
  wall = createSprite(1200,200,wall_thickness,height/2);
  reset = createSprite(850,125.75,10,10)
  

  

}





function draw() {
  background("black"); 

  text('PRESS SPACE TO BEGIN SIMULATION',600,75)
  text('PRESS SHIFT/CLICK HERE TO REFRESH:',595,130)
  text('SEVERITY OF COLLISSION:',100,50)
  
 
  bullet.depth = wall.depth+ 1

  indicator.shapeColor = wall.shapeColor

  
 

 if(wall.x-bullet.x < (bullet.width+wall.width)/2){

  bullet.velocityX = 0
  damage = 0.5*bullet_weight*bullet_speed*bullet_speed/(wall_thickness*wall_thickness*wall_thickness)  



  if(damage<= 10){
    
    wall.shapeColor = "lightgreen"

  }


  if(damage> 10){
 
     wall.shapeColor = "red"

    
  }
  
  console.log(damage)



  }


   
  if(mousePressedOver(reset)){

     location.reload();

  }
  

  drawSprites();
}


function keyPressed(){

 if(keyCode === 32){
    bullet.velocityX = bullet_speed;
 }

 if(keyCode === 16 ){
      location.reload(); 
 }

}





