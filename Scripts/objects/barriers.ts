module objects{
    export class Barriers extends objects.GameObject{
        // Variables

        // Constructor
        constructor(imageString: string, position: math.Vec2){
            super(imageString);
            this.x = position.x;
            this.y = position.y;            
        }
        // Methods
        public Start():void {
        }
        public Update():void {}
        public Reset():void {}
        public Move(): void {}
        public CheckBound():void{
            //Yizhi's movement cancellation function upon barrier contact. TODO: change!
            
            let gapTopLeftX = this.x - this.halfW;
            let gapTopLeftY = this.y - this.halfH;
            let entityFeetX = managers.Game.player.x;
            let entityFeetY = managers.Game.player.y + managers.Game.player.halfH;

            
            if (managers.Collision.Check(this, managers.Game.player)) {
                if (managers.Game.keyboardManager.moveLeft) {
                    managers.Game.player.x += managers.Game.player.playerMoveSpeed;
                }
                if (managers.Game.keyboardManager.moveRight) {
                    managers.Game.player.x -= managers.Game.player.playerMoveSpeed;
                }
                if (managers.Game.keyboardManager.moveUp) {
                    managers.Game.player.y += managers.Game.player.playerMoveSpeed;
                }
                if (managers.Game.keyboardManager.moveDown) {
                    managers.Game.player.y -= managers.Game.player.playerMoveSpeed;
                }
            }
            
        }        

        public TestZombieCheckBarrierCollision(zombie: objects.TestZombie): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
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