module objects {
    export class GhostWoman extends objects.Enemy {
        // Variables
        private shieldSpawn: math.Vec2;
        public rateOfFire: number;
        private rightDirection: boolean;
        private downDirection: boolean;
        private defenseMode: boolean;
        private walk: Array<any>;
        public direction: config.Direction;
        private iceShield: objects.IceShield;

        // Constructor
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean) {
            super(managers.Game.enemies_TextureAtlas, "GhostWoman_IdleFront");
            this.Start();

            this.hp = 5;
            this.attackPower = 1;
            this.rateOfFire = 200;
            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.75;
            this.eatTimer = 400;
            this.isFlying = true;
            this.canBeEaten = true;
            this.bounty = 60;
            this.defenseMode = false;
            this.powerUp = config.PowerUp.ICE;

            this.walk = ["GhostWoman_IdleBack", "GhostWoman_IdleFront", "GhostWoman_IdleLeft", "GhostWoman_IdleLeft"];

            this.direction = config.Direction.DOWN;

            
        }
        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
            
        }
        public Update(): void {
            if(this.iceShield == null){
                this.IceShieldCreation();
            }
            this.iceShield.Update();
            if (!this.isStunned && !this.isDead) {
                if (this.defenseMode) {
                    this.SwitchAnimation("GhostWoman_Attack");
                    managers.Game.SFX = createjs.Sound.play("iceShield");
                    managers.Game.SFX.volume = 0.1;
                } else {
                    this.SwitchAnimation(this.walk[this.direction as number]);
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostWoman_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostWoman_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostWoman_Explode");
                }
            }
            super.Update();
            this.iceShield.isActivated = this.defenseMode;
        }
        public Reset(): void { }
        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 115) {
                this.canBeAttacked = false;
                this.defenseMode = true;
            } else {
                this.canBeAttacked = true;
                this.defenseMode = false;
            }

            if (!this.defenseMode) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;

                if (this.x > managers.Game.gameWidth && this.rightDirection) {
                    this.scaleX = 1;
                    this.rightDirection = false;
                }
                else if (this.x < 0 && !this.rightDirection) {
                    this.scaleX = -1;
                    this.rightDirection = true;
                }
                if (this.y > managers.Game.gameHeight && this.downDirection) {
                    this.downDirection = false;
                }
                else if (this.y < 0 && !this.downDirection) {
                    this.downDirection = true;
                }
            }
        }
        public IceShieldCreation():void{
            this.iceShield = new objects.IceShield(this);
            (managers.Game.currentStage as scenes.PlayScene).AddIceShieldToScene(this.iceShield);
        }
        public DevourEffect(): void {
            managers.Game.player.powerUp = this.powerUp;
            managers.Game.SFX = createjs.Sound.play("phoebeTransform");
            managers.Game.SFX.volume = 0.6;
            super.DevourEffect();
        }

        public RemoveFromPlay(bounty: number): void {
            this.isDead = true;

            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        }
    }
}