module scenes {

    export class Mansion_16 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestZombie(2);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.TestZombie(1);
            this.enemies[1].SetPosition(new math.Vec2(450, 200));
            this.enemies[2] = new objects.TestZombie(2);
            this.enemies[2].SetPosition(new math.Vec2(450, 650));
            this.enemies[3] = new objects.TestZombie(1);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));
            this.enemies[4] = new objects.Bat(2.5, 100);
            this.enemies[4].SetPosition(new math.Vec2(285, 420));

            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[0].SetPosition(new math.Vec2(285, 440));

            managers.Game.player.sceneOnRight = config.Scene.MANSION_17;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_12;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_18;
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