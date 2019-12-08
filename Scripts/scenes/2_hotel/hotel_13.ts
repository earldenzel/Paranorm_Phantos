module scenes {

    export class Hotel_13 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true,config.Design.HOTEL);
            this.isDoorLeftLocked = managers.HotelLocks.hotel_13_lockLeft;
            this.isDoorBotLocked = managers.HotelLocks.hotel_13_lockBot;
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            
            this.enemies[0] = new objects.Skeleton(new math.Vec2(450,450), 1, true, true);
            this.enemies[1] = new objects.Zombie(2);
            this.enemies[1].SetPosition(new math.Vec2(400, 500));
            this.enemies[2] = new objects.Zombie(2);
            this.enemies[2].SetPosition(new math.Vec2(440, 650));
            this.enemies[3] = new objects.RedSkeleton(new math.Vec2(300,500), 1, true, true);
            this.enemies[4] = new objects.Skeleton(new math.Vec2(600,600), 1, true, true);
            this.enemies[5] = new objects.Skeleton(new math.Vec2(150,650), 1, true, true);

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_12;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_14;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_15;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_9;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,66);
        }        

        public Update(): void {
            if(!this.isDoorLeftLocked){
                managers.HotelLocks.hotel_13_lockLeft = false;
            }
            if(!this.isDoorBotLocked){
                managers.HotelLocks.hotel_13_lockBot = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}