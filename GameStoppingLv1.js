function GameStoppingLv1(){

    if(role === "1"){

        if(player.isTouching(obs)){
            bg.velocityX = 0;
            obs.setVelocityXEach(0);
            obs.setLifetimeEach(-1);
            player.velocityX=0;
            player.velocityY=0;
            gamestate = 2;
        }


    }

    else if(role === "2"){

        if(player.isTouching(Stone)){
            stone.destroy();
        }

        if(player.isTouching(Bush)||player.isTouching(Monster)){

            bg.velocityX = 0;
            obs.setVelocityXEach(0);
            obs.setLifetimeEach(-1);
            player.velocityX=0;
            player.velocityY=0;
            gamestate = 2

        }

        


    }

    else if(role === "3"){

        if(player.isTouching(Monster)){
            monster.destroy();
        }

        if(player.isTouching(Bush)||player.isTouching(Stone)){

            bg.velocityX = 0;
            obs.setVelocityXEach(0);
            obs.setLifetimeEach(-1);
            player.velocityX=0;
            player.velocityY=0;
            gamestate = 2

        }

        


    }








}
