module objects{
    export class Barriers extends objects.GameObject{
        // Variables

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString: string){
            super(assetManager,imageString);
            this.Start();
            
        }
        // Methods
        public Start():void {
            this.x = 200;
            this.y = 200;
            this.regX = objects.Game.player.halfW;
            this.regY = objects.Game.player.halfH;
        }
        public Update():void {}
        public Reset():void {}
        public Move(): void {}
        public CheckBound():void{
            //Yizhi's movement cancellation function upon barrier contact          
            if (managers.Collision.Check(this, objects.Game.player)) {
                if (objects.Game.keyboardManager.moveLeft) {
                    objects.Game.player.x += objects.Game.player.playerMoveSpeed;
                }
                if (objects.Game.keyboardManager.moveRight) {
                    objects.Game.player.x -= objects.Game.player.playerMoveSpeed;
                }
                if (objects.Game.keyboardManager.moveUp) {
                    objects.Game.player.y += objects.Game.player.playerMoveSpeed;
                }
                if (objects.Game.keyboardManager.moveDown) {
                    objects.Game.player.y -= objects.Game.player.playerMoveSpeed;
                }
            }            
        }        

        public TestZombieCheckBarrierCollision(zombie: objects.TestZombie): void {
            let playerPosition: math.Vec2 = new math.Vec2(objects.Game.player.x, objects.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(zombie.x, zombie.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (managers.Collision.Check(this, zombie)) {
                zombie.x -= math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, zombie.GetObjectSpeed()).x;
                zombie.y -= math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, zombie.GetObjectSpeed()).y;
            }
        }


        

        

        
    }
}