module scenes {

    export class Mansion_3 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false,config.Design.MANSION);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.GhostWoman(2, false, false);

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
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}