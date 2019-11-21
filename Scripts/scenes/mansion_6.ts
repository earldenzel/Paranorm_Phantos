module scenes {

    export class Mansion_6 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.TestEnemy(2.5, true, true);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.TestEnemy(2.5, false, true);
            this.enemies[1].SetPosition(new math.Vec2(400, 200));
            this.enemies[2] = new objects.TestEnemy(2.5, false, false);
            this.enemies[2].SetPosition(new math.Vec2(400, 650));
            this.enemies[3] = new objects.TestEnemy(2.5, true, false);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));
            this.enemies[4] = new objects.TestEnemy(2.5, true, true);
            this.enemies[4].SetPosition(new math.Vec2(280, 380));

            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 230));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 230));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 640));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 640));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 440));
            this.obstacles[6] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 440));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_5;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_7;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_2;
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