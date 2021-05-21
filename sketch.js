const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState=0
var database;
var playerCount=0
var allPlayers;
var player,player_1
var Thanos_img,blocks,iron_man
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,ground;
var form


function preload(){
    Thanos_img=loadImage("images/thanos.jpg")
    blocks=loadImage("images/images.jpeg")
    iron_man=loadImage("images/iron_2.png")

}
function setup(){
    engine = Engine.create();
    world = engine.world;
    canvas=createCanvas(1500,880)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

  
 


}
function draw(){
    Engine.update(engine);
    background("white");

   
    if(playerCount === 2){
      game.update(1);
    }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
  



    


    

     
   

    drawSprites() 
}
