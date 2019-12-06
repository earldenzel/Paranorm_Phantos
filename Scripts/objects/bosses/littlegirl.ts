module objects {
    export class LittleGirl extends objects.Enemy {
        // Variables
        private currentSpeed: number;
        private rightDirection: boolean;
        private downDirection: boolean;
        private isTeleporting: boolean;
        private maxHp: number;
        private teleportLimit: number;
        public spawn: objects.ConjuringHand;
        private spawnCount: number;
        private spawnLimit: number;

        // Constructor
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean) {
            super(managers.Game.bosses_TextureAtlas, "Boss3_Idle");
            this.Start();

            this.hp = 30;
            this.maxHp = this.hp;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.currentSpeed = this.moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.75;
            this.eatTimer = 5000;
            this.isFlying = true;
            this.isTeleporting = false;
            this.teleportLimit = 0;
            this.spawnCount = 0;
            this.spawnLimit = 1;
        }

        // Methods
        public Start(): void {
            // Set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if (this.isStunned) {
                this.visible = true;
                this.SwitchAnimation("Boss3_Stun");
            }
            else if (this.isTeleporting) {
                this.SwitchAnimation("Boss3_Disappear");
                this.visible = false;

                let ticker: number = createjs.Ticker.getTicks();
                if (ticker % 90 == 0) {
                    this.isTeleporting = false;
                    this.teleportLimit = 60;
                }
            }
            else {
                this.visible = true;
                this.SwitchAnimation("Boss3_Idle");
                if((managers.Game.currentStage as scenes.PlayScene).getChildIndex(this.spawn) == null){
                    this.spawnCount = 0;
                }
                // If 2/3rds of its life is gone
                if (this.hp < this.maxHp &&
                    this.hp >= (this.maxHp * (2 / 3))) {
                    if (this.spawnCount != this.spawnLimit) {
                        this.ConjureHandAndActivate(true, new math.Vec2(this.x + 10, this.y));
                    }
                }
                // If 1/3rds of its life is gone
                else if (this.hp < (this.maxHp * (2 / 3)) &&
                    this.hp >= (this.maxHp * (1 / 3))) {
                        this.spawnLimit = 2
                    if(this.spawnCount != this.spawnLimit){
                        switch(this.spawnCount){
                            case 0:
                                this.ConjureHandAndActivate(true, new math.Vec2(this.x + 10, this.y));
                            break;
                            case 1:
                                this.ConjureHandAndActivate(false, new math.Vec2(this.x - 10, this.y));
                            break;
                        }
                    }
                }
            }
            if (this.teleportLimit > 0) {
                this.teleportLimit--;
            }
            else {
                this.teleportLimit = 0;
            }
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 130 && !this.isTeleporting && this.teleportLimit == 0) {
                this.isTeleporting = true;
                this.currentSpeed = this.moveSpeed * 4;
            }
            else {
                this.isTeleporting = false;
                this.currentSpeed = this.moveSpeed;
            }

            this.x += this.rightDirection ? this.currentSpeed : -this.currentSpeed;
            this.y += this.downDirection ? this.currentSpeed : -this.currentSpeed;

            if (this.x > managers.Game.gameWidth && this.rightDirection) {
                this.rightDirection = false;
            }
            else if (this.x < 0 && !this.rightDirection) {
                this.rightDirection = true;
            }
            if (this.y > managers.Game.gameHeight && this.downDirection) {
                this.downDirection = false;
            }
            else if (this.y < 0 && !this.downDirection) {
                this.downDirection = true;
            }
        }

        public ConjureHandAndActivate(leftNotRight: boolean, position: math.Vec2): void {
            this.spawn = new objects.ConjuringHand(leftNotRight, position);

            (managers.Game.currentStage as scenes.PlayScene).AddEnemyToScene(this.spawn);
            this.spawnCount += 1;
        }
    }
}