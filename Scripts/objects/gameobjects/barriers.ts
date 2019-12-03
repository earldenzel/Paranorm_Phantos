module objects {
    export class Barriers extends objects.GameObject {
        // Variables

        // Constructor
        constructor(textureAtlas: createjs.SpriteSheet, imageString: string) {
            super(textureAtlas, imageString);
            this.Start();
        }
        // Methods
        public Start(): void {
            if (this.name == "GraveTile"){
                this.scaleX = 2;
                this.scaleY = 2;
            }
        }
        public Update(): void { }
        public Reset(): void { }
        public Move(): void { }
        public CheckBound(): void {
            if (managers.Collision.CheckWithOffset(
                this, managers.Game.player,
                -config.Bounds.OBSTACLE_OFFSET,
                managers.Game.player.height - config.Bounds.OBSTACLE_OFFSET,
                -config.Bounds.OBSTACLE_OFFSET,
                managers.Game.player.halfW - config.Bounds.OBSTACLE_OFFSET
            )) {
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
                if (managers.Game.keyboardManager.running) {
                    let runningSpeed: number = managers.Game.player.playerMoveSpeed + 1;
                    if (managers.Game.keyboardManager.moveLeft) {
                        managers.Game.player.x += runningSpeed;
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        managers.Game.player.x -= runningSpeed;
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        managers.Game.player.y += runningSpeed;
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        managers.Game.player.y -= runningSpeed;
                    }
                }
            }

        }

        public ZombieCheckBarrierCollision(zombie: objects.Zombie): void {
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