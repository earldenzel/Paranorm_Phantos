module objects {
    //export interface Controller<T> { [key: string]: T };
    export class Player extends objects.GameObject {
        //Variables
        public attackSequence: number = 0;
        public delaySequence: number = 0;
        public biteSequence: number = 0;
        public textSequence: number = 0;
        public transitSequence: number = 0;
        public victorySequence: number = 0;
        public playerIceDamageSequence: number = 0;
        public contactDamageTimer: number;
        public projectileDamageTimer: number;
        public playerMoveSpeed: number = 4;
        public playerHalfSpeed: number = this.playerMoveSpeed / 4;
        public playerAttackDelay: number = 1000;
        public weapon: objects.Weapon;
        public swing: objects.Swing;
        private bitingTimer: number = 0;
        private bitingReset: number = 0;
        public canTraverseTop: boolean = false;
        public canTraverseBot: boolean = false;
        public canTraverseLeft: boolean = false;
        public canTraverseRight: boolean = false;
        public sceneOnTop: number;
        public sceneOnBot: number;
        public sceneOnLeft: number;
        public sceneOnRight: number;
        private walk: Array<any>;
        private run: Array<any>;
        private stand: Array<any>;
        private bitedash: Array<any>;
        private bite: Array<any>;
        private specialAttack: Array<any>;
        public direction: config.Direction;
        public money: number;
        public key: number;
        public lastPosition: math.Vec2;
        public playerStatus: objects.Label;
        public deadPlayer: Array<objects.DeadPlayer> = new Array<objects.DeadPlayer>();
        public eatCount: number = 0;
        public deathCount: number = 0;
        public stageFinished: number = 0;
        public iceShield: objects.IceShield;
        public godMode: boolean = false;

        public ecto: number;
        public maxHp: number;
        public maxEcto: number;
        public activatePowers: boolean;
        public experience: number;
        public level: number;

        // Soul Activation
        public activateSoul: boolean;
        public soulCounter: number = 2500;
        public soulReplenishTimer: number = 0;
        public isFlying: boolean;
        public soulMoveSpeed: number;
        public soulAttackPower: number;
        public soulAttackDelay: number = 500;
        private soulIdle: Array<any>;
        private soulRun: Array<any>;
        private soulDodge: Array<any>;
        private dodgeTimer: number = 0;
        private dodgeReset: number = 0;
        private soulSpecialAttack: Array<any>;

        //Constructor
        constructor() {
            super(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Front1");
            this.weapon = new objects.Weapon();
            this.swing = new objects.Swing();
            this.Start();
            this.hp = 5;
            this.maxHp = this.hp;
            this.ecto = 0;
            this.maxEcto = 5;
            this.attackPower = 1;
            this.activatePowers = false;
            this.walk = ["Phoebe_Walk_Back1", "Phoebe_Walk_Front1", "Phoebe_Walk_Left1", "Phoebe_Walk_Right1"];
            this.stand = ["Phoebe_Walk_Back2", "Phoebe_Walk_Front2", "Phoebe_Walk_Left2", "Phoebe_Walk_Right2"];
            this.run = ["Phoebe_Run_Back", "Phoebe_Run_Front", "Phoebe_Run_Left", "Phoebe_Run_Right"];
            this.bitedash = ["Phoebe_Bite_Back", "Phoebe_Bite_Front1", "Phoebe_Bite_Left1", "Phoebe_Bite_Right1"];
            this.bite = ["Phoebe_Bite_Front2", "Phoebe_Bite_Front2", "Phoebe_Bite_Left2", "Phoebe_Bite_Right2"];
            this.specialAttack = ["Phoebe_SpecialAttack_Back", "Phoebe_SpecialAttack_Front", "Phoebe_SpecialAttack_Left", "Phoebe_SpecialAttack_Right"];
            this.direction = config.Direction.DOWN;
            this.money = 0;
            this.playerStatus = new objects.Label("1234567890", "16px", "'Press Start 2P'", "#FFFFFF", this.x, this.y, true);
            this.key = 0;
            this.deadPlayer = [
                new objects.DeadPlayer("Phoebe_Dead_A"),
                new objects.DeadPlayer("Phoebe_Dead_B", false, false),
                new objects.DeadPlayer("Phoebe_Dead_B", true, false),
                new objects.DeadPlayer("Phoebe_Dead_B", false, true),
                new objects.DeadPlayer("Phoebe_Dead_B", true, true)
            ];
            this.experience = 0;

            this.SoulSetup();
            this.IceShieldCreation();
            this.level = 0;
            this.contactDamageTimer = 0;
            this.projectileDamageTimer = 0;
        }

        // Methods
        public Start(): void {
            this.x = 405;
            this.y = 600;
            this.lastPosition = this.GetPosition();
            //this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };
        }

        public Update(): void {
            managers.Game.player = this;
            if (this.powerUp == config.PowerUp.ICE) {
                this.iceShield.Update();
            }
            if(this.activateSoul){
                if (this.soulCounter > 0){ 
                    this.soulCounter -= 1;               
                    if (this.soulCounter % 100 == 99){
                        console.log(this.soulCounter);
                    }
                }
                else{
                    this.soulCounter = 0;
                    this.activateSoul = false;
                    this.DeactivateSoulMode();
                }
                this.soulReplenishTimer = 0;
            }
            else{
                this.soulReplenishTimer++;
            }

            if (this.soulReplenishTimer > 6000 && this.soulCounter == 0){
                this.soulCounter = 2500;
            }

            if (this.soulCounter == 2500){
                if (this.soulReplenishTimer % 1000 == 0){
                    this.EchoMessage("MY SOUL IS READY");
                }
            }

            this.x = Math.round(this.x);
            this.y = Math.round(this.y);

            //player should take damage again in 200ms
            if (this.isTakingDamage){
                this.contactDamageTimer++;
            }
            else{
                this.contactDamageTimer = 0;
            }
            if (this.contactDamageTimer > 200){
                this.contactDamageTimer = 0;
                this.isTakingDamage = false;
            }

            if (this.isTakingProjectileDamage){
                this.projectileDamageTimer++;
            }
            if (this.projectileDamageTimer > 20){
                this.projectileDamageTimer = 0;
                this.isTakingProjectileDamage = false;
            }

            if (this.fallSequence > 0){
                this.FallIntoHole();
            }
            else{
                this.scaleX = 1;
                this.scaleY = 1;
            }

            if (this.hp > 0) {
                this.Move();
                this.weapon.Update();
                this.swing.Update();
            }
            if (this.isDead) {
                this.deadPlayer.forEach(e => {
                    e.visible = true;
                    e.Update();
                });
            }
            this.CheckBound(); // <-- Check collisions

            //define the moving status bar for Phoebe
            this.playerStatus.x = this.x;
            if (this.y < config.Bounds.TEXT_SHIFT_Y) {
                this.playerStatus.y = this.y + this.halfH + config.Bounds.TEXT_OFFSET;
            }
            else {
                this.playerStatus.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
            }

            if(!this.activateSoul){
                if (this.bitingTimer == 4) {
                    this.bitingReset++;
                }
                if (this.bitingReset == 40) {
                    console.log("BITING RESET");
                    this.bitingTimer = 0;
                    this.bitingReset = 0;
                }
    
                // SOUND EFFECTS
                if (this.bitingTimer == 1) {
                    managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                    managers.Game.SFX.volume = 0.2;
                    this.bitingTimer++;
                }
            }
            else{
                if (this.dodgeTimer == 4) {
                    this.dodgeReset++;
                }
                if (this.dodgeReset == 40) {
                    console.log("BITING RESET");
                    this.dodgeTimer = 0;
                    this.dodgeReset = 0;
                }
    
                // SOUND EFFECTS
                if (this.dodgeTimer == 1) {
                    managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                    managers.Game.SFX.volume = 0.2;
                    this.dodgeTimer++;
                }
            }            

            this.ActivatePowers();
            if (this.activatePowers && (this.powerUp == config.PowerUp.SLIME || this.powerUp == config.PowerUp.FIRE)) {
                if(!this.activateSoul){
                    this.SwitchAnimation(this.specialAttack[this.direction as number]);
                }
                else{
                    this.SwitchAnimation(this.soulSpecialAttack[this.direction as number]);
                }
                this.ProjectileAttack(this.powerUp);
            }
        }

        public Reset(): void {
            this.visible = true;
            this.hp = this.maxHp;
            this.ecto = 0;
            this.isDead = false;
            this.SwitchAnimation(this.stand[this.direction as number]);
            this.deadPlayer.forEach(e => {
                e.visible = false;
            });
            this.Start();
            this.isTakingDamage = false;
        }

        public Move(): void {
            if(!this.activateSoul){
                this.PlayerMove();
            }
            else{
                this.SoulMove()
            }
        }
        public PlayerMove(): void {
            //movement implementation

            if(managers.Game.keyboardManager.attacking && managers.Game.keyboardManager.biting && !managers.Game.keyboardManager.running){
                this.ActivateSoulMode();
                managers.Game.SFX = createjs.Sound.play("phoebeTransform");
                managers.Game.SFX.volume = 0.6;
            }
            if (!this.activatePowers) {
                if (!managers.Game.keyboardManager.moveUp
                    && !managers.Game.keyboardManager.moveDown
                    && !managers.Game.keyboardManager.moveLeft
                    && !managers.Game.keyboardManager.moveRight
                    && !managers.Game.keyboardManager.attacking
                    && !managers.Game.keyboardManager.biting
                    && this.biteSequence === 0
                    && this.victorySequence == 0){
                        this.SwitchAnimation(this.stand[this.direction as number]);
                }

                if (this.victorySequence !== 0){
                    this.SwitchAnimation("Phoebe_Victory");
                }

                // Running Implementation
                if (managers.Game.keyboardManager.running) {
                    let runningSpeed: number = this.playerMoveSpeed + 2;
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= runningSpeed;
                        this.direction = config.Direction.LEFT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.run[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += runningSpeed;
                        this.direction = config.Direction.RIGHT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.run[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        this.y -= runningSpeed;
                        this.direction = config.Direction.UP;
                        this.SwitchAnimation(this.run[this.direction as number]);
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        this.y += runningSpeed;
                        this.direction = config.Direction.DOWN;
                        this.SwitchAnimation(this.run[this.direction as number]);
                    }
                }
                else {
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= this.playerMoveSpeed;
                        this.direction = config.Direction.LEFT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.walk[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += this.playerMoveSpeed;
                        this.direction = config.Direction.RIGHT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.walk[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        this.y -= this.playerMoveSpeed;
                        this.direction = config.Direction.UP;
                        this.SwitchAnimation(this.walk[this.direction as number]);
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        this.y += this.playerMoveSpeed;
                        this.direction = config.Direction.DOWN;
                        this.SwitchAnimation(this.walk[this.direction as number]);
                    }
                }
            }
            //if player presses the attack button
            if (managers.Game.keyboardManager.attacking && !managers.Game.keyboardManager.biting) {
                if (this.attackSequence == 0 && this.weapon != undefined && this.delaySequence == 0) {
                    this.alpha = 0;
                    this.attackSequence = 1;
                    this.delaySequence = 1;
                    this.weapon.Attack();
                }
            }

            if (this.biteSequence !== 0) {
                this.SwitchAnimation(this.bite[this.direction as number]);
            }
            // Biting/Dash Implementation
            if (managers.Game.keyboardManager.biting && !managers.Game.keyboardManager.attacking) {
                if (this.bitingTimer <= 3) {
                    managers.Game.keyboardManager.enabled = false;
                    switch (this.direction) {
                        case config.Direction.UP:
                            this.y -= (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                        case config.Direction.DOWN:
                            this.y += (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                        case config.Direction.RIGHT:
                            this.x += (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                        case config.Direction.LEFT:
                            this.x -= (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                    }
                    managers.Game.keyboardManager.enabled = true;
                    this.bitingTimer++;
                }
            }

            if (managers.Game.keyboardManager.powers) {
                if (this.ecto > 0 && this.powerUp != config.PowerUp.NONE) {
                    this.activatePowers = true;
                }
                else {
                    if (this.powerUp == config.PowerUp.NONE){
                        this.EchoMessage("I HAVE NO POWERS YET");
                    }
                    else{
                        this.EchoMessage("I NEED MORE ECTO");
                    }
                    this.activatePowers = false;
                }
            }
            else {
                this.activatePowers = false;
            }

            
        }
        public SoulMove():void{
            if (!this.activatePowers) {
                if (!managers.Game.keyboardManager.moveUp
                    && !managers.Game.keyboardManager.moveDown
                    && !managers.Game.keyboardManager.moveLeft
                    && !managers.Game.keyboardManager.moveRight
                    && !managers.Game.keyboardManager.attacking
                    && !managers.Game.keyboardManager.biting
                    && this.biteSequence === 0) {
                    this.SwitchAnimation(this.soulIdle[this.direction as number]);
                }
                // Running Implementation
                if (managers.Game.keyboardManager.running) {
                    let runningSpeed: number = this.soulMoveSpeed + 2;
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= runningSpeed;
                        this.direction = config.Direction.LEFT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.soulRun[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += runningSpeed;
                        this.direction = config.Direction.RIGHT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.soulRun[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        this.y -= runningSpeed;
                        this.direction = config.Direction.UP;
                        this.SwitchAnimation(this.soulRun[this.direction as number]);
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        this.y += runningSpeed;
                        this.direction = config.Direction.DOWN;
                        this.SwitchAnimation(this.soulRun[this.direction as number]);
                    }
                }
                else {
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= this.soulMoveSpeed;
                        this.direction = config.Direction.LEFT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.soulIdle[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += this.soulMoveSpeed;
                        this.direction = config.Direction.RIGHT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.soulIdle[this.direction as number]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        this.y -= this.soulMoveSpeed;
                        this.direction = config.Direction.UP;
                        this.SwitchAnimation(this.soulIdle[this.direction as number]);
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        this.y += this.soulMoveSpeed;
                        this.direction = config.Direction.DOWN;
                        this.SwitchAnimation(this.soulIdle[this.direction as number]);
                    }
                }
            }
            //if player presses the attack button
            if (managers.Game.keyboardManager.attacking) {
                if (this.attackSequence == 0 && this.weapon != undefined && this.delaySequence == 0) {
                    this.alpha = 0;
                    this.attackSequence = 1;
                    this.delaySequence = 1;
                    this.weapon.SoulAttack();
                }
            }

            // Biting/Dash Implementation
            if (managers.Game.keyboardManager.biting) {
                if (this.dodgeTimer <= 3) {
                    managers.Game.keyboardManager.enabled = false;
                    let dodgeSpeed = this.soulMoveSpeed + 32;
                    switch (this.direction) {
                        case config.Direction.UP:
                            this.y -= dodgeSpeed;
                            this.SwitchAnimation(this.soulDodge[this.direction as number]);
                            break;
                        case config.Direction.DOWN:
                            this.y += dodgeSpeed;
                            this.SwitchAnimation(this.soulDodge[this.direction as number]);
                            break;
                        case config.Direction.RIGHT:
                            this.x += dodgeSpeed;
                            this.SwitchAnimation(this.soulDodge[this.direction as number]);
                            break;
                        case config.Direction.LEFT:
                            this.x -= dodgeSpeed;
                            this.SwitchAnimation(this.soulDodge[this.direction as number]);
                            break;
                    }
                    managers.Game.keyboardManager.enabled = true;
                    this.dodgeTimer++;
                }
            }

            if (managers.Game.keyboardManager.powers) {
                if (this.ecto > 0 && this.powerUp != config.PowerUp.NONE) {
                    this.activatePowers = true;
                }
                else {
                    this.activatePowers = false;
                }
            }
            else {
                this.activatePowers = false;
            }
        }

        public CheckBound(): void {
            // right bound
            if (this.x >= config.Bounds.RIGHT_BOUND - this.halfW) {
                if (this.canTraverseRight) {
                    if (this.y < config.Bounds.DOOR_EASING_TOP || this.y > config.Bounds.DOOR_EASING_BOTTOM) {
                        this.x = config.Bounds.RIGHT_BOUND - this.halfW;
                    }
                    if (this.x >= config.Bounds.RIGHT_BOUND + this.width && this.transitSequence == 0) {
                        this.lastPosition = new math.Vec2(config.Bounds.LEFT_BOUND - this.halfW, this.y);
                        this.SetTransit(this.lastPosition, this.sceneOnRight);
                    }
                }
                else {
                    this.x = config.Bounds.RIGHT_BOUND - this.halfW;
                }
            }
            // left bound
            if (this.x <= this.halfW + config.Bounds.LEFT_BOUND) {
                if (this.canTraverseLeft) {
                    if (this.y < config.Bounds.DOOR_EASING_TOP || this.y > config.Bounds.DOOR_EASING_BOTTOM) {
                        this.x = this.halfW + config.Bounds.LEFT_BOUND;
                    }
                    if (this.x <= 0 && this.transitSequence == 0) {
                        this.lastPosition = new math.Vec2(config.Bounds.RIGHT_BOUND + this.halfW, this.y);
                        this.SetTransit(this.lastPosition, this.sceneOnLeft);
                    }
                }
                else {
                    this.x = this.halfW + config.Bounds.LEFT_BOUND;
                }
            }
            // bottom bound
            if (this.y >= config.Bounds.BOTTOM_BOUND - this.halfH) {
                if (this.canTraverseBot) {
                    if (this.x < config.Bounds.DOOR_EASING_LEFT || this.x > config.Bounds.DOOR_EASING_RIGHT) {
                        this.y = config.Bounds.BOTTOM_BOUND - this.halfH;
                    }
                    if (this.y >= config.Bounds.BOTTOM_BOUND + this.height && this.transitSequence == 0) {
                        this.lastPosition = new math.Vec2(this.x, this.halfH + config.Bounds.TOP_BOUND)
                        this.SetTransit(this.lastPosition, this.sceneOnBot);
                    }
                }
                else {
                    this.y = config.Bounds.BOTTOM_BOUND - this.halfH;
                }
            }
            // top bound
            if (this.y <= this.halfH + config.Bounds.TOP_BOUND) {
                if (this.canTraverseTop) {
                    if (this.x < config.Bounds.DOOR_EASING_LEFT || this.x > config.Bounds.DOOR_EASING_RIGHT) {
                        this.y = this.halfH + config.Bounds.TOP_BOUND;
                    }
                    if (this.y <= config.Bounds.TOP_BOUND && this.transitSequence == 0) {
                        this.lastPosition = new math.Vec2(this.x, config.Bounds.BOTTOM_BOUND + this.halfH);
                        this.SetTransit(this.lastPosition, this.sceneOnTop);
                    }
                }
                else {
                    this.y = this.halfH + config.Bounds.TOP_BOUND;
                }
            }
        }

        public GetDamage(attacker: objects.GameObject) {
            /*
            if (managers.Game.player.activatePowers && managers.Game.player.powerUp == config.PowerUp.BITE){
                return;
            }
            */
            super.GetDamage(attacker);
            this.HurtMessage();
            if(!this.activateSoul){
                this.SwitchAnimation("Phoebe_Hurt");
            }
            else {
                this.SwitchAnimation("PhoebeSoul_Hit");
            }
            if (this.hp <= 0) {
                this.DeathSequence();
            }
        }
        public GainMaxHealth() {
            this.maxHp += 5;
            this.hp = this.maxHp;
            this.EchoMessage("MAX HP UP");

        }

        //phoebe effects from devour
        public GainHealth(healthGain: number) {
            let oldHp: number = this.hp;
            this.hp += healthGain;
            if (this.hp > this.maxHp) {
                this.hp = this.maxHp;
            }
            let gain: number = this.hp - oldHp;
            let message: string = "";
            if (gain > 0) {
                let random: number = Math.random() * 100;
                if (random > 75) {
                    message = "DELICIOUS.";
                } else if (random > 50) {
                    message = "I FEEL BETTER";
                } else if (random > 25) {
                    message = "HEALED UP!"
                } else {
                    message = "+" + gain + " HP";
                }
            }
            else {
                let random: number = Math.random() * 100;
                if (random > 75) {
                    message = "YUM!";
                } else if (random > 50) {
                    message = "FRESH MEAT";
                } else if (random > 25) {
                    message = "TASTY!"
                } else {
                    message = "ALL GOOD";
                }
            }
            this.EchoMessage(message);
        }
        public ActivatePowers(): void {
            if (this.activatePowers) {
                let ticker: number = createjs.Ticker.getTicks();
                switch (this.powerUp) {
                    case config.PowerUp.SHADOW:
                        this.SwitchAnimation("Phoebe_Shadow");
                        if (ticker % 90 == 0) {
                            this.ecto -= 1;
                            managers.Game.SFX = createjs.Sound.play("phoebeShield");
                            managers.Game.SFX.volume = 0.1;
                        }
                        break;
                    case config.PowerUp.BITE:
                        switch (this.direction) {
                            case config.Direction.UP:
                                this.y -= (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction as number]);
                                break;
                            case config.Direction.DOWN:
                                this.y += (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction as number]);
                                break;
                            case config.Direction.RIGHT:
                                this.x += (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction as number]);
                                break;
                            case config.Direction.LEFT:
                                this.x -= (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction as number]);
                                break;
                        }
                        if (ticker % 15 == 0) {
                            this.ecto -= 1;
                        }
                        break;

                    // TO BE TESTED ALONG WITH GHOST SLIME, SLIME PUDDLE, AND SLIME BALL
                    case config.PowerUp.FIRE:
                    case config.PowerUp.SLIME: // KC
                        (managers.Game.currentStage as scenes.PlayScene).hasProjectileShooters = true;
                        break;
                    case config.PowerUp.ICE:
                        this.SwitchAnimation("Phoebe_Special");
                        if (ticker % 90 == 0) {
                            this.ecto -= 1;
                            managers.Game.SFX = createjs.Sound.play("iceShield");
                            managers.Game.SFX.volume = 0.1;
                        }
                        this.iceShield.isActivated = true;
                        break;
                }
            }
            else{
                switch (this.powerUp) {
                    case config.PowerUp.ICE:
                        this.iceShield.isActivated = false;
                        break;
                }
            }
        }

        public GainSpeed(speedGain: number) {
            this.playerMoveSpeed += speedGain;
            this.playerHalfSpeed = this.playerMoveSpeed / 4;
            this.EchoMessage("+" + speedGain + " MOVE SPD");
        }
        public AlterSpeed(reduceSpeed: boolean) {
            if (!reduceSpeed && this.playerMoveSpeed == this.playerHalfSpeed) {
                this.playerMoveSpeed = this.playerHalfSpeed * 4;
            }
            else if (reduceSpeed) {
                this.playerMoveSpeed = this.playerHalfSpeed;
            }

            //console.log(this.playerMoveSpeed);
        }

        public GainAttack(attackGain: number) {
            this.attackPower += attackGain;
            this.EchoMessage("+" + attackGain + " ATK");
        }

        public GainDollars(dollars: number) {
            this.money += dollars;
            if (dollars > 0) {
                this.EchoMessage("GAINED $" + dollars);
            }
        }

        public GainSwingSpeed(delayLoss: number) {
            this.playerAttackDelay -= delayLoss;
            this.EchoMessage("I CAN SWING FASTER NOW");
        }

        public GainRandomPower(){
            let random: number = Math.random() * 100;
            if (random > 80) {
                this.powerUp = config.PowerUp.BITE;
            } else if (random > 60) {
                this.powerUp = config.PowerUp.FIRE;
            } else if (random > 40) {
                this.powerUp = config.PowerUp.ICE;
            } else if (random > 20) {
                this.powerUp = config.PowerUp.SLIME;
            } else {
                this.powerUp = config.PowerUp.SHADOW;
            }            
            this.EatMessage(this.powerUp);            
        }

        public ResetLevelToZero(){
            this.experience = 0;
            this.level = 0;
            this.EchoMessage("I AM BORN ANEW");
        }

        public GainKey() {
            this.key += 1;
            this.EchoMessage("GAINED A SMALL KEY");
        }

        public UseKey() {
            this.key -= 1;
            this.EchoMessage("UNLOCKED");
        }

        public GainEcto(gain: number = 1) {
            if (this.ecto < this.maxEcto) {
                this.ecto += gain;
            }
            if (this.ecto > this.maxEcto) {
                this.ecto = this.maxEcto;
            }
        }

        public HurtMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("OUCH!", 500);
            } else if (random > 50) {
                this.EchoMessage("UGH...", 500);
            } else if (random > 25) {
                this.EchoMessage("GET OFF ME!", 500);
            } else {
                this.EchoMessage("WHY YOU!", 500);
            }
        }

        public FallMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("AAAAHH!", 500);
            } else if (random > 50) {
                this.EchoMessage("NOOOOO...", 500);
            } else if (random > 25) {
                this.EchoMessage("UH OH", 500);
            } else {
                this.EchoMessage("OOPS", 500);
            }
        }

        public DeadMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("I FAILED...", 3000);
            } else if (random > 50) {
                this.EchoMessage("IS THIS IT?", 3000);
            } else if (random > 25) {
                this.EchoMessage("GOOD NIGHT..", 3000);
            } else {
                this.EchoMessage("BYE BYE", 3000);
            }
        }

        public EatMessage(powerup: config.PowerUp = config.PowerUp.NONE) {
            switch (powerup){
                case config.PowerUp.NONE:
                    let random: number = Math.random() * 100;
                    if (random > 75) {
                        this.EchoMessage("MUNCH MUNCH", 3000);
                    } else if (random > 50) {
                        this.EchoMessage("CHOMP CHOMP", 3000);
                    } else if (random > 25) {
                        this.EchoMessage("MMMMMM...", 3000);
                    } else {
                        this.EchoMessage("AHHHH...", 3000);
                    }
                    break;
                case config.PowerUp.SHADOW:
                    this.EchoMessage("DARK POWER!", 3000);
                    break;
                case config.PowerUp.BITE:
                    this.EchoMessage("DASH POWER!", 3000);
                    break;
                case config.PowerUp.FIRE:
                    this.EchoMessage("FIRE POWER!", 3000);
                    break;
                case config.PowerUp.ICE:
                    this.EchoMessage("FROST POWER!", 3000);
                    break;
                case config.PowerUp.SLIME:
                    this.EchoMessage("ECTO POWER!", 3000);
                    break;
            }
        }

        public VictoryDance() {
            this.EchoMessage("I DID IT!", 1000);
            managers.Game.keyboardManager.ControlReset();    
            this.victorySequence = setTimeout(() => {
                this.victorySequence = 0;
                managers.Game.keyboardManager.enabled = true;
                this.direction = config.Direction.DOWN;
            }, 2000);
        }

        public EchoMessage(message: string, timeout: number = 1000) {
            if (this.isDead) {
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                setTimeout(() => {
                    managers.Game.currentScene = config.Scene.OVER;
                }, timeout);
            }
            else {
                if (this.textSequence != 0) {
                    clearTimeout();
                }
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                this.textSequence = setTimeout(() => {
                    this.playerStatus.visible = false;
                    this.textSequence = 0;
                }, timeout);
            }
        }

        public GainExperience(experience: number): void{
            if (experience == null){
                experience = 0;
            }
            this.experience += experience;
            let calculatedLevel : number = managers.Game.expConfigurer.DetermineLevel(this.experience);
            if (calculatedLevel > this.level){
                for (let index = this.level+1; index <= calculatedLevel; index++) {                    
                    managers.Game.expConfigurer.LevelUpEffects(index);           
                }
                this.level = calculatedLevel;
                this.EchoMessage("I REACHED LV." + this.level);
            }
        }

        private phoebeDied(): void {
            this.off("animationend", null);
            this.deadPlayer.forEach(e => {
                e.SetPosition(this.GetPosition());
                e.visible = true;
            });
            this.visible = false;
            this.weapon.visible = false;
        }

        public DeathSequence(): void {
            createjs.Sound.stop();
            managers.Game.SFX = createjs.Sound.play("anyDefeated");
            this.SwitchAnimation("Phoebe_Explosion");
            this.on("animationend", this.phoebeDied.bind(this), false, true);
            this.isDead = true;
            this.DeadMessage();

        }

        public SwitchAnimation(newAnimation: string) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
            if ((this.isTakingDamage && this.contactDamageTimer <20)
                || (this.isTakingProjectileDamage && this.projectileDamageTimer < 20)
                || this.fallSequence !== 0){
                this.gotoAndPlay("Phoebe_Hurt");
            }
        }

        public SetBitePositionDirection(target: math.Vec2): void {
            switch (this.direction) {
                case config.Direction.UP:
                    this.direction = config.Direction.DOWN;
                case config.Direction.DOWN:
                    target = math.Vec2.Add(target, new math.Vec2(-this.halfW / 2, 0));
                    break;
                case config.Direction.RIGHT:
                    target = math.Vec2.Add(target, new math.Vec2(-this.halfW * 2, 0));
                    break;
                case config.Direction.LEFT:
                    target = math.Vec2.Add(target, new math.Vec2(this.halfW, 0));
                    break;
            }
            this.SetPosition(target);
        } 

        public FallIntoHole(){
            this.scaleX -= 0.04;
            this.scaleY -= 0.06;
        }

        public SetTransit(nextPosition: math.Vec2, nextScene: config.Scene, changeMusic: boolean = false): void{
            this.visible = false;
            this.transitSequence = setTimeout(() =>{
                this.visible = true;
                managers.Game.currentScene = nextScene;
                if (changeMusic){
                    managers.Game.music.stop();
                }
                this.SetPosition(nextPosition);
                this.transitSequence = 0;
            }, 200);
        }
        
        public ProjectileAttack(bulletType: config.PowerUp): void {
            let ticker = createjs.Ticker.getTicks();
            let rateOfFire = 10;
            if (ticker % rateOfFire == 0) {
                let bulletSpawn = new math.Vec2(this.x + this.halfW, this.y);
                let currentBullet = managers.Game.bulletManager.CurrentBullet;
                let bullet;
                if (bulletType == config.PowerUp.SLIME) {
                    bullet = managers.Game.bulletManager.slimeBalls[currentBullet];
                    managers.Game.SFX = createjs.Sound.play("slimeball");
                    managers.Game.SFX.volume = 0.4;
                }
                else if (bulletType == config.PowerUp.FIRE) {
                    bullet = managers.Game.bulletManager.fireBalls[currentBullet];
                    managers.Game.SFX = createjs.Sound.play("fireball");
                    managers.Game.SFX.volume = 0.4;
                }
                bullet.attackPower = Math.floor(this.attackPower/2);
                bullet.staticNotPositional = true;
                bullet.direction = this.direction;

                bullet.x = bulletSpawn.x;
                bullet.y = bulletSpawn.y;

                managers.Game.bulletManager.CurrentBullet++;
                if (managers.Game.bulletManager.CurrentBullet > 49) {
                    managers.Game.bulletManager.CurrentBullet = 0;
                }
                this.ecto -= 1;
            }
        }
        public IceShieldCreation(): void {
            this.iceShield = new objects.IceShield(this);
            this.iceShield.playerNotEnemy = true;
            this.iceShield.visible = false;
        }

        public SoulSetup(): void {
            this.activateSoul = false;
            this.isFlying = false;
            this.soulMoveSpeed = this.playerMoveSpeed + 1;
            this.soulAttackPower = this.attackPower + 2;
            this.soulIdle = ["PhoebeSoul_Walk_Back", "PhoebeSoul_Walk_Front", "PhoebeSoul_Walk_Left", "PhoebeSoul_Walk_Right"];
            this.soulRun = ["PhoebeSoul_Run_Back", "PhoebeSoul_Run_Front", "PhoebeSoul_Run_Left", "PhoebeSoul_Run_Right"];
            this.soulDodge = ["PhoebeSoul_Dodge_Back", "PhoebeSoul_Dodge_Front", "PhoebeSoul_Dodge_Left", "PhoebeSoul_Dodge_Right"];
            this.soulSpecialAttack = ["PhoebeSoul_SpecialAttack_Back", "PhoebeSoul_SpecialAttack_Front", "PhoebeSoul_SpecialAttack_Left", "PhoebeSoul_SpecialAttack_Right"];
        }
        public ActivateSoulMode(): void {
            this.activateSoul = true;
            this.attackSequence = 0;
            this.attackPower += 2;
            //this.weapon.alpha = 0;
            this.weapon.visible = false;
            this.alpha = 1;
            this.SwitchAnimation(this.soulIdle[this.direction as number]);
            if (this.soulCounter > 0){            
                this.isFlying = true;
                this.EchoMessage("SOUL MODE!!");
            }
        }
        public DeactivateSoulMode(): void {
            this.isFlying = false;
            this.attackSequence = 0;
            this.attackPower -= 2;
            //this.weapon.alpha = 0;
            this.weapon.visible = false;
            this.alpha = 1;
        }
    }
}