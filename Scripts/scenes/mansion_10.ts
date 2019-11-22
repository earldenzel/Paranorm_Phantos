module scenes {

    export class Mansion_10 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.TestEnemy(2.5, false, true);
            this.enemies[2].SetPosition(new math.Vec2(400, 200));
            this.enemies[3] = new objects.TestEnemy(2.5, true, false);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));

            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 285));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 345));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 650));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 590));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 530));
            this.obstacles[6] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 225));
            this.obstacles[7] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 285));
            this.obstacles[8] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 345));
            this.obstacles[9] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 650));
            this.obstacles[10] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 590));
            this.obstacles[11] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 530));

            managers.Game.player.sceneOnBot = config.Scene.MANSION_14;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,50);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}