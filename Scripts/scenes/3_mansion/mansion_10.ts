module scenes {

    export class Mansion_10 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false, config.Design.MANSION);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.GhostThin(2.5, false, true);
            this.enemies[2].SetPosition(new math.Vec2(400, 200));
            this.enemies[3] = new objects.GhostThin(2.5, true, false);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));

            this.obstacles[0] = new objects.SlimePuddle(1,new math.Vec2(165,520));
            this.obstacles[1] = new objects.SlimePuddle(3,new math.Vec2(455,320));
            this.obstacles[2] = new objects.SlimePuddle(0,new math.Vec2(326,600));
            this.obstacles[3] = new objects.SlimePuddle(2,new math.Vec2(320,200));
            this.obstacles[4] = new objects.SlimePuddle(0,new math.Vec2(220,480));
            this.obstacles[5] = new objects.SlimePuddle(3,new math.Vec2(350,630));

            managers.Game.slimePuddles = [
                (this.obstacles[0] as objects.SlimePuddle),
                (this.obstacles[1] as objects.SlimePuddle),
                (this.obstacles[2] as objects.SlimePuddle),
                (this.obstacles[3] as objects.SlimePuddle),
                (this.obstacles[4] as objects.SlimePuddle),
                (this.obstacles[5] as objects.SlimePuddle)
            ];

            this.enemies[4] = new objects.GhostSlime();
            this.enemies[5] = new objects.GhostSlime();

            managers.Game.player.sceneOnBot = config.Scene.MANSION_14;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,50);
        }        

        public Update(): void {
            this.player.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(this.player));
            this.enemies.forEach(e => {
                if(!e.isFlying){
                    e.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(e));
                }
            });
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}