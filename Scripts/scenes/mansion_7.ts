module scenes {

    export class Mansion_7 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true,config.Design.MANSION);
            this.isDoorLeftLocked = managers.MansionLocks.mansion_7_lockLeft;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.Zombie(1.5);
            this.enemies[0].SetPosition(new math.Vec2(280, 350));
            this.enemies[1] = new objects.Zombie(1);
            this.enemies[1].SetPosition(new math.Vec2(280, 550));
            this.enemies[2] = new objects.Zombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(200, 450));
            this.enemies[3] = new objects.Zombie(1);
            this.enemies[3].SetPosition(new math.Vec2(350, 450));

            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Bookshelf_B");
            this.obstacles[0].SetPosition(new math.Vec2(90, 175));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Bookshelf_B");
            this.obstacles[1].SetPosition(new math.Vec2(425, 175));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "PotPlant");
            this.obstacles[2].SetPosition(new math.Vec2(90, 640));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "PotPlant");
            this.obstacles[3].SetPosition(new math.Vec2(450, 640));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_6;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_1;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_11;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,34);
        }        

        public Update(): void {
            if(!this.isDoorLeftLocked){
                managers.MansionLocks.mansion_7_lockLeft = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}