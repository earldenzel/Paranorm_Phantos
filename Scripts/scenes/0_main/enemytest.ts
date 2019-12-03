module scenes{
    // This is a debug room made for testing new enemies within the game
    export class EnemyTest_Level extends scenes.PlayScene{
        // Variables
        // Constructor
        constructor(){
            super(false,false,false,false,config.Design.HOTEL);
            this.hasProjectileShooters = true;
            this.player.ecto = this.player.maxEcto;
            //this.player.GainMaxHealth();
            this.Start();
        }
        // Methods
        public Start(): void {
            //this.obstacles[0] = new objects.SlimePuddle(1,new math.Vec2(165,520));
            //this.obstacles[1] = new objects.SlimePuddle(3,new math.Vec2(455,320));
            //this.obstacles[2] = new objects.SlimePuddle(0,new math.Vec2(326,600));
            //this.obstacles[3] = new objects.SlimePuddle(2,new math.Vec2(320,200));
            //
            //managers.Game.slimePuddles = [
            //    (this.obstacles[0] as objects.SlimePuddle),
            //    (this.obstacles[1] as objects.SlimePuddle),
            //    (this.obstacles[2] as objects.SlimePuddle),
            //    (this.obstacles[3] as objects.SlimePuddle)
            //];
            //this.enemies[0] = new objects.Undertaker(2);
            //this.enemies[0].hp = 1;
            //this.enemies[0] = new objects.GhostSlime();
            //this.enemies[1] = new objects.GhostSlime();
            this.enemies[0] = new objects.GhostMan(2);
            //this.enemies[0] = new objects.Skeleton(new math.Vec2(300,300),2,true,false);
            super.Start();
        }
        public Update():void{
            // To be added to the game if there's Slime Puddles in the level
            //this.player.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(this.player));
            //this.enemies.forEach(e =>{
            //    if(!e.isFlying){
            //         e.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(e));
            //    }
            //});
            
            
            super.Update();
        }
        public Main(): void {
            this.playerInfo.PlayerLocation = new math.Vec2(112,34); // 30,12
            super.Main();
        }
    }
}