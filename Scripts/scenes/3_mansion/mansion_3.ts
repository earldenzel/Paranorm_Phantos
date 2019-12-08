module scenes {

    export class Mansion_3 extends scenes.PlayScene {
        private extraEnemyHasSpawned: boolean = false;
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false,config.Design.MANSION);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.GhostWoman(5, false, false);
            this.enemies[1] = new objects.Skeleton(new math.Vec2(150, 150), 3, false, true);
            this.enemies[2] = new objects.Skeleton(new math.Vec2(650, 150), 3, true, true);
            this.enemies[3] = new objects.Skeleton(new math.Vec2(400, 150), 3, false, false);

            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(285, 440));

            managers.Game.player.sceneOnBot = config.Scene.MANSION_8;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,18);
        }        

        public Update(): void {
            if (this.enemies[1].isDead && this.enemies[2].isDead && this.enemies[3].isDead && !this.extraEnemyHasSpawned){
                this.extraEnemyHasSpawned = true;
                this.AddEnemyToScene(new objects.GhostMan(2));
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}