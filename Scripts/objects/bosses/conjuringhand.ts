module objects {
    export enum HandAttackMode {
        CHASE,
        QUAKE,
        SLAP
    }
    export class ConjuringHand extends objects.Enemy {
        // Variables
        private leftNotRight: boolean;
        private attackingMode: HandAttackMode;
        private currentAttackPower: number;
        private quakingCounter: number;

        private bulletSpawn: math.Vec2;
        private rateOfFire: number;
        private explosions: objects.Explosion[];

        // Constructor
        constructor(leftNotRight: boolean, moveSpeed?:number) {
            super(managers.Game.bosses_TextureAtlas, "Boss3_OpenHand");
            this.leftNotRight = leftNotRight;
            this.Start();

            this.hp = 50;
            this.attackPower = 2;
            if(moveSpeed == null){
                this.moveSpeed = 2;
            } else {
                this.moveSpeed = moveSpeed;
            }
            this.knockback = 0.25;
            this.eatTimer = 1000;
            this.bounty = 50;
            this.isFlying = true;
            this.currentAttackPower = this.attackPower;
            this.rateOfFire = 5;
            this.attackingMode = HandAttackMode.CHASE;
            this.quakingCounter = 0;
            this.explosion = new objects.Explosion(ExplodeTypes.DEFAULT, this.GetPosition(), 2);
            this.explosions = [
                new objects.Explosion(ExplodeTypes.DEFAULT, this.GetPosition(), 3),
                new objects.Explosion(ExplodeTypes.DEFAULT, this.GetPosition(), 3),
                new objects.Explosion(ExplodeTypes.DEFAULT, this.GetPosition(), 3)
            ];
        }

        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
            if (!this.leftNotRight) {
                this.scaleX = -1;
            }
        }
        public Update(): void {
            let ticker = createjs.Ticker.getTicks();
            if(this.isDead){
                for (let i = 0; i < this.explosions.length; i++) {
                    const e = this.explosions[i];
                    switch (i) {
                        case 0:
                            e.x = (this.x - this.halfW);
                            e.y = (this.y - this.halfH) - 100;
                            break;
                        case 1:
                            e.x = (this.x - this.halfW);
                            e.y = (this.y - this.halfH) - 150;
                            break;
                        case 2:
                            e.x = (this.x - this.halfW);
                            e.y = (this.y - this.halfH) + 100;
                            break;
                    }
                }
                managers.Game.stage.addChild(this.explosions[0]);
                if(ticker % 60 == 0){
                    managers.Game.stage.addChild(this.explosions[1]);
                }
                if(ticker % 60 == 0){
                    managers.Game.stage.addChild(this.explosions[2]);
                }
            }
            if (this.attackingMode != HandAttackMode.QUAKE) {
                if (this.leftNotRight) {
                    this.scaleX = 1;
                }
                else {
                    this.scaleX = -1;
                }
            }
            switch (this.attackingMode) {
                case HandAttackMode.CHASE:
                    this.SwitchAnimation("Boss3_OpenHand");
                    break;
                case HandAttackMode.SLAP:
                    if (this.currentAnimation == "Boss3_Slap" && this.currentAnimationFrame > 3) {
                        this.SwitchAnimation("Boss3_OpenHandSide");
                    }
                    this.SwitchAnimation("Boss3_Slap");
                    break;
                case HandAttackMode.QUAKE:
                    if (this.leftNotRight) {
                        this.scaleX = -1;
                    }
                    else {
                        this.scaleX = 1;
                    }
                    this.SwitchAnimation("Boss3_ClosedHand");
                    this.quakingCounter++;
                    if (this.quakingCounter > 30) {
                        this.BulletFire();
                    }
                    break;
            }
            super.Update();
            console.log("Quake Counter: ",this.quakingCounter);
            
        }
        public Reset(): void { }
        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 120) {
                this.attackingMode = HandAttackMode.SLAP;
                this.currentAttackPower = this.attackingMode + 1;
            }
            else if (distanceToPlayer > 200) {
                this.attackingMode = HandAttackMode.QUAKE;
                this.currentAttackPower = this.attackingMode + 1;
            }
            else {
                this.attackingMode = HandAttackMode.CHASE;
                this.currentAttackPower = this.attackingMode;
            }
            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));

            if (this.attackingMode == HandAttackMode.CHASE) {
                this.x = newPos.x;
                this.y = newPos.y;
            }
        }
        public CheckBound(): void {
            super.CheckBound();
        }
        public BulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();

            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = this.GetPosition();

                    for (let i = 0; i < 8; i++) {
                        let currentBullet = managers.Game.bulletManager.CurrentBullet;
                        let bullet = managers.Game.bulletManager.quakeEffects[currentBullet];
                        
                        bullet.SetupEffect(i);
                        bullet.x = this.bulletSpawn.x;
                        bullet.y = this.bulletSpawn.y;
                        bullet.activation = true;

                        managers.Game.bulletManager.CurrentBullet++;
                        if (managers.Game.bulletManager.CurrentBullet > 49) {
                            managers.Game.bulletManager.CurrentBullet = 0;
                        }
                    }
                }
                this.quakingCounter = 0;
            } else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }
        }
    }
}