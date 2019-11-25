module objects {
    export class Weapon extends objects.GameObject {
        // Variables
        private images: Array<any>;
        private animationEnd: Array<any>;
        // Constructor
        constructor() {
            super(managers.Game.phoebe_TextureAtlas, "Phoebe_Attack_Back");            
            this.images = ["Phoebe_Attack_Back","Phoebe_Attack_Front", "Phoebe_Attack_Left", "Phoebe_Attack_Right"];
            //this.animationEnd = [15, 12, 18, 28];
            this.animationEnd = [8, 20, 9, 27];
            this.Start();
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
            this.visible = false;
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            this.x = managers.Game.player.x;
            this.y = managers.Game.player.y; 
            if (this.currentAnimationFrame > 2.8){
                this.visible = false;
                managers.Game.player.attackSequence = 0;
                managers.Game.player.alpha = 1;
                console.log("Attack ended");
            }
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Collision Detection 
        public CheckBound():void {            
        }

        public Attack(): void{            
            console.log("Attack initiated");
            this.visible = true;
            this.currentAnimationFrame = 0;
            managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
            managers.Game.SFX.volume = 0.2;
            if (this.currentAnimation != this.images[managers.Game.player.direction as number]){               
                this.gotoAndPlay(this.images[managers.Game.player.direction as number]);
            }
            this.Delay();
            
        }

        public Delay(): void{
            console.log("Delay initiated");
            setTimeout(() => {
                managers.Game.player.delaySequence = 0;
                console.log("Delay ended");
            }, managers.Game.player.playerAttackDelay);

        }
    }
}