module scenes {

    export class Hotel_11 extends scenes.PlayScene {

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false,config.Design.HOTEL);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {            
            this.enemies[0] = new objects.GhostTeeth(3);
            this.enemies[0].SetPosition(new math.Vec2(200, 200));            
            this.enemies[1] = new objects.GhostTeeth(2);
            this.enemies[1].SetPosition(new math.Vec2(400, 400));            
            this.enemies[2] = new objects.GhostTeeth(5);
            this.enemies[2].SetPosition(new math.Vec2(600, 300));   
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_10;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,50);
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}