module scenes {

    export class Mansion_13 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 180));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[2].attackPower = 1;
            this.enemies[3] = new objects.Bat(2, 100);
            this.enemies[3].SetPosition(new math.Vec2(280, 420));

            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Bookshelf_ooks");
            this.obstacles[0].SetPosition(new math.Vec2(160, 170));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Bookshelf_ooks");
            this.obstacles[1].SetPosition(new math.Vec2(350, 170));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(285, 440));

            managers.Game.player.sceneOnBot = config.Scene.MANSION_17;
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