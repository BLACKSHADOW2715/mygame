class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
       
      
         form = new Form()
        form.display();
        }
       
    }


    play(){
       form.hide()
       background(Thanos_img);
       
       

        box1 =  createSprite(150,720,250,20)
        box1.addImage(blocks)
        box2 =  createSprite(1300,720,250,20)
        box2.addImage(blocks)
        box3 =  createSprite(725,720,250,20)
        box3.addImage(blocks)
        box4 =  createSprite(450,550,250,20)
        box4.addImage(blocks)
        box5 =  createSprite(1025,550,250,20)
        box5.addImage(blocks)
        box6 =  createSprite(150,300,250,20)
        box6.addImage(blocks)
        box7 =  createSprite(1300,300,250,20)
        box7.addImage(blocks)
        box8=  createSprite(725,300,250,20)
        box8.addImage(blocks)
        box9 =  createSprite(450,100,250,20)
        box9.addImage(blocks)
      
        box10 =  createSprite(1025,100,250,20)
        box10.addImage(blocks)
        ground= createSprite(750,880,1500,10)

        player_1=createSprite(displayWidth/2, displayHeight-70,0.7,0.3)
        player_1.addImage(iron_man)
        player_1.scale=0.2

        if(KeyDown("right")){
          player_1.x=player_1.x+5
        }

        


            
        

       

        
    }
    
      
    }
