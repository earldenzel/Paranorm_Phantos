module scenes {

    export class Hotel_6 extends scenes.PlayScene {

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true,config.Design.HOTEL);
            this.hasProjectileShooters = true;
            this.isDoorLeftLocked = managers.HotelLocks.hotel_6_lockLeft;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(120, 200));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(420, 630));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.TestEnemy(3, false, false);
            this.enemies[2].SetPosition(new math.Vec2(280, 380));

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_5;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_7;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_9;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_1;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,34);
        }

        public Update(): void {
            if(!this.isDoorLeftLocked){
                managers.HotelLocks.hotel_6_lockLeft = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}