module managers {
    export class CreditScroll extends createjs.Container {
        // Variables
        //      This will showcase all the enemies
        private characterGraphics: createjs.Sprite[];
        private characterLabels: objects.Label[];

        constructor() {
            super();
            this.InIt();
        }

        // Methods
        private InIt(): void {
            this.characterGraphics = this.PopulateGraphics();
            this.characterLabels = this.PopulateLabels();

            this.Main();
        }
        private Main(): void {
            this.characterGraphics.forEach(g => {
                this.addChild(g);
            });
            this.characterLabels.forEach(l => {
                this.addChild(l);
            });
        }

        /**
             * List:
             *      Bat
             *      Maggot
             *      Maggot Small
             *      Skeleton
             *      Red Skeleton
             *      Zombie
             *      Spiders
             *      Shooting Flower
             *      Ghost
             *      Ghost Thin
             *      Ghost Shadow
             *      Ghost Slime
             *      Ghost Teeth
             *      Ghost Man
             *      Ghost Woman
             * 
             *      Undertaker
             *      Undertaker Form B
             *      Hotel Manager
             *      Giant Worm
             *      Little Girl 
             *      Conjuring Hand
             * 
             *      Shopkeeper
             *      Phoebe
             **/

        private PopulateGraphics(): Array<createjs.Sprite> {
            let popGraphics = [
                new createjs.Sprite(managers.Game.bat_TextureAtlas, "bat"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "Maggot_WalkSide"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "Maggot_SmallWalkSide"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "Skeleton_WalkFront"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "RedSkeleton_WalkFront"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "Zombie_WalkFront"),
                new createjs.Sprite(managers.Game.spider_TextureAtlas, "spiderUp"),
                new createjs.Sprite(managers.Game.shootingFlower_TextureAtlas, "shootingFlower"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "Ghost_Idle"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "GhostThin_Idle"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "GhostShadow_Opaque"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "GhostSlime_Travel"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "GhostTeeth_Idle"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "GhostMan_IdleFront"),
                new createjs.Sprite(managers.Game.enemies_TextureAtlas, "GhostWoman_IdleFront"),

                new createjs.Sprite(managers.Game.bosses_TextureAtlas, "Boss1_WalkFront"),
                new createjs.Sprite(managers.Game.bosses_TextureAtlas, "Boss1_Idle"),
                new createjs.Sprite(managers.Game.bosses_TextureAtlas, "Boss2_Idle"),
                new createjs.Sprite(managers.Game.bosses_TextureAtlas, "Boss2_Worm"),
                new createjs.Sprite(managers.Game.bosses_TextureAtlas, "Boss3_Idle"),
                new createjs.Sprite(managers.Game.bosses_TextureAtlas, "Boss3_OpenHand"),

                new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "FortuneTeller"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Victory"),
                new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Company_Logo")
            ];
            for (let i = 0; i < popGraphics.length; i++) {
                const element = popGraphics[i];
                element.x = 300 - (element.getBounds().width / 2);
                if(i == 0){
                    //element.y = (150 * (i + 1)) + (element.getBounds().height); 
                    element.y = 150;
                }
                else if(i == 23){
                    element.y = (popGraphics[i - 1].y  + popGraphics[i-1].getBounds().height) + 610;
                }
                else{
                    //element.y = (180 * (i + 1)) + popGraphics[i - 1].getBounds().height + 20; 
                    element.y = (popGraphics[i - 1].y  + popGraphics[i-1].getBounds().height) + 40;
                }               
            }

            return popGraphics;
        }
        private PopulateLabels(): Array<objects.Label> {
            let popLabels = new Array<objects.Label>();
            let labels = [
                "Bat",
                "Maggot",
                "Maggot Small",
                "Skeleton",
                "Red Skeleton",
                "Zombie",
                "Spiders",
                "Shooting Flower",
                "Ghost",
                "Ghost Thin",
                "Ghost Shadow",
                "Ghost Slime",
                "Ghost Teeth",
                "Ghost Man",
                "Ghost Woman",
                "Undertaker",
                "Undertaker Form B",
                "Hotel Manager",
                "Giant Worm",
                "Little Girl",
                "Conjuring Hand",
                "Shopkeeper",
                "Phoebe",
                "",
                "",
                "",
                "",
                "",
                "Total $: " + managers.Game.player.money.toString(),
                "Player Level: " + managers.Game.player.level,
                "Player Attack: " + managers.Game.player.attackPower,
                "Player Speed: " + managers.Game.player.playerMoveSpeed,
                "Eat Count: " + managers.Game.player.eatCount,
                "Death Count: " + managers.Game.player.deathCount,
                "",
                "Thank You For Playing Our Game!",
                "Kris, Earl, Yizhi are"
            ];
            for (let i = 0; i < labels.length; i++) {
                if(i < 23){
                    let getY = this.characterGraphics[i].getBounds().height + this.characterGraphics[i].y;
                    popLabels[i] = new objects.Label(labels[i],"16px", "'Press Start 2P'", "#FFFFFF", 300, getY + 20, true); 
                }
                else{
                    let getY = popLabels[i - 1].y;
                    popLabels[i] = new objects.Label(labels[i],"16px", "'Press Start 2P'", "#FFFFFF", 300, getY + 40, true); 
                }
            }
            return popLabels;
        }
    }
}