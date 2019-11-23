module scenes {

    export class Hotel_13 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true,config.Design.HOTEL);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Zombie(2);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.Zombie(2);
            this.enemies[2].SetPosition(new math.Vec2(440, 650));

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_12;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_14;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_15;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_9;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,66);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}