module scenes {

    export class Mansion_12 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, false, config.Design.MANSION);
            this.isDoorBotLocked = managers.MansionLocks.mansion_12_lockBot;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.Bat(2.5, 100);
            this.enemies[0].SetPosition(new math.Vec2(180, 200));
            this.enemies[1] = new objects.Bat(3, 100);
            this.enemies[1].SetPosition(new math.Vec2(380, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(280, 550));

            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(115, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(450, 225));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(115, 650));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(450, 650));
            this.obstacles[4] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "PotPlant");
            this.obstacles[4].SetPosition(new math.Vec2(200, 420));
            this.obstacles[5] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "PotPlant");
            this.obstacles[5].SetPosition(new math.Vec2(350, 420));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_11;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_8;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_16;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,50);
        }        

        public Update(): void {
            if(!this.isDoorBotLocked){
                managers.MansionLocks.mansion_12_lockBot = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}