module objects {
    export class Weapon extends objects.GameObject {
        // Variables
        private images: Array<any>;
        // Constructor
        constructor() {
            super(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Back1");
            this.images = [
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Attack_Back1"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Attack_Front1"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Attack_Left1"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Attack_Right1"),
            ]
            this.Start();
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
            this.visible = false;
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            this.currentAnimation = this.images[managers.Game.player.direction as number];
            this.rotation = 0;
            switch(managers.Game.player.direction){
                case config.Direction.UP:
                    this.rotation = 180;
                    this.x = managers.Game.player.x;
                    this.y = managers.Game.player.y - managers.Game.player.halfH;
                    break;
                case config.Direction.DOWN:
                    this.x = managers.Game.player.x;
                    this.y = managers.Game.player.y + managers.Game.player.halfH;
                    break;
                case config.Direction.LEFT:
                    this.x = managers.Game.player.x - managers.Game.player.halfW;
                    this.y = managers.Game.player.y;
                    break;
                case config.Direction.RIGHT:
                    this.x = managers.Game.player.x + managers.Game.player.halfW;
                    this.y = managers.Game.player.y;
                    break;

            }
            this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Collision Detection 
        public CheckBound():void {
            // top bound - TODO: directions            
            switch(managers.Game.player.direction){
                case config.Direction.UP:
                    if (this.y <= managers.Game.player.y - managers.Game.player.height + managers.Game.player.halfH) {
                        this.y = managers.Game.player.y - managers.Game.player.height + managers.Game.player.halfH;
                    }
                    break;
                case config.Direction.DOWN:
                    if (this.y >= managers.Game.player.y + managers.Game.player.halfH) {
                        this.y = managers.Game.player.y + managers.Game.player.halfH;
                    }
                    break;
                case config.Direction.LEFT:
                    if (this.x <= managers.Game.player.x - managers.Game.player.width + managers.Game.player.halfW) {
                        this.x = managers.Game.player.x - managers.Game.player.width + managers.Game.player.halfW;
                    }
                    break;
                case config.Direction.RIGHT:
                    if (this.x <= managers.Game.player.x + managers.Game.player.halfW) {
                        this.x = managers.Game.player.x + managers.Game.player.halfW;
                    }
                    break;
            }
            
        }

        public Attack(): void{            
            console.log("Attack initiated");
            this.visible = true;
            managers.Game.player.attackSequence = setInterval(() => {
                switch(managers.Game.player.direction){
                    case config.Direction.UP:
                        this.x = this.x;
                        this.y -= 20;
                        break;
                    case config.Direction.DOWN:
                        this.x = this.x;
                        this.y += 20;
                        break;
                    case config.Direction.LEFT:
                        this.x -= 20;
                        this.y = this.y;
                        break;
                    case config.Direction.RIGHT:
                        this.x += 20;
                        this.y = this.y;
                        break;
                }
            }, 50);
        }
    }
}