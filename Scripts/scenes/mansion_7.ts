module scenes {

    export class Mansion_7 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.TestZombie(1.5);
            this.enemies[0].SetPosition(new math.Vec2(280, 350));
            this.enemies[1] = new objects.TestZombie(1);
            this.enemies[1].SetPosition(new math.Vec2(280, 550));
            this.enemies[2] = new objects.TestZombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(200, 450));
            this.enemies[3] = new objects.TestZombie(1);
            this.enemies[3].SetPosition(new math.Vec2(350, 450));

            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Bookshelf_ooks");
            this.obstacles[0].SetPosition(new math.Vec2(90, 175));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Bookshelf_ooks");
            this.obstacles[1].SetPosition(new math.Vec2(425, 175));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Plant_ng");
            this.obstacles[2].SetPosition(new math.Vec2(90, 640));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Plant_ng");
            this.obstacles[3].SetPosition(new math.Vec2(450, 640));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_6;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_1;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_11;
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