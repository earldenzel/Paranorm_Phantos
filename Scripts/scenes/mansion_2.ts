module scenes {

    export class Mansion_2 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(170, 300));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(370, 200));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.ShootingFLower(new math.Vec2(170, 520));
            this.enemies[2].attackPower = 1;
            this.enemies[3] = new objects.ShootingFLower(new math.Vec2(370, 420));
            this.enemies[3].attackPower = 1;

            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[0].SetPosition(new math.Vec2(180, 380));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[1].SetPosition(new math.Vec2(380, 280));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[2].SetPosition(new math.Vec2(180, 600));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[3].SetPosition(new math.Vec2(380, 500));

            managers.Game.player.sceneOnBot = config.Scene.MANSION_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(46,28);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}