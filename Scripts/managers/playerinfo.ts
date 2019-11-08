module managers{
    export class PlayerInfo_UI extends createjs.Container{
        // Variables
        public playerInfo_Base: createjs.Bitmap;

        public moneyLabel: objects.Label;
        public keyLabel: objects.Label;
        public playerInfo_Health: createjs.Bitmap;
        public playerInfo_Ecto: createjs.Bitmap;
        public playerInfo_Map: createjs.Sprite;
        public playerInfo_Location: createjs.Sprite;
        // Add in Player Info Map

        private money: number;
        private key: number;
        private playerHealth: number;
        private playerEcto: number;
        private playerLocation: math.Vec2;

        // Add in Player Location

        // Getters and Setters
        get Money():number{
            return this.money;
        }
        set Money(newMoney: number){
            this.money = newMoney;
            this.moneyLabel.text = this.money.toString();
        }
        get Key():number{
            return this.key;
        }
        set Key(newKey: number){
            this.key = newKey;
            this.keyLabel.text = this.Key.toString();
        }
        get PlayerHealth():number{
            return this.playerHealth;
        }
        set PlayerHealth(newPlayerHealth:number){
            this.playerHealth = newPlayerHealth;
            this.removeChild(this.playerInfo_Health);
            this.ChangeHealthInfo();
            this.addChild(this.playerInfo_Health);
        }
        get PlayerEcto():number{
            return this.PlayerEcto;
        }
        set PlayerEcto(newPlayerEcto:number){
            this.playerEcto = newPlayerEcto;
            this.removeChild(this.playerInfo_Ecto);
            this.ChangeEctoInfo();
            this.addChild(this.playerInfo_Ecto);
        }
        get PlayerLocation():math.Vec2{
            return this.playerLocation;
        }
        set PlayerLocation(newCoordinates:math.Vec2){
            this.playerLocation = newCoordinates;
            this.removeChild(this.playerInfo_Location);
            this.ChangePlayerLocation();
            this.addChild(this.playerInfo_Location);
        }


        // Constructor
        constructor(){
            super();
            this.InIt();
        }

        // Methods
        private InIt(): void{
            // Create Base
            this.playerInfo_Base = new createjs.Bitmap(managers.Game.assetManager.getResult("ui_playerinfo"));
            // Create Labels
            this.moneyLabel = new objects.Label(
                "00000000","16px", "'Press Start 2P'", "#FFFFFF",236,20,false
            );
            this.keyLabel = new objects.Label(
                "00","16px", "'Press Start 2P'", "#FFFFFF",250,77,false
            );
            this.playerInfo_Map = new createjs.Sprite(managers.Game.map_TextureAtlas,"MapsGraveyard_UnlockABC");
            this.playerInfo_Map.x = 30;
            this.playerInfo_Map.y = 12;

            this.playerInfo_Location = new createjs.Sprite(managers.Game.map_TextureAtlas, "MapsGraveyard_PlayerLocation");

            // Set Defaults
            this.playerHealth = 5;
            this.playerEcto = 5;
            this.money = 0;
            this.key = 0;
            this.playerLocation = new math.Vec2(0,0);

            this.ChangePlayerLocation();

            this.ChangeHealthInfo();
            this.ChangeEctoInfo();

            this.Main();
        }
        private Main():void{
            // Add to the Player Information Container
            this.addChild(this.playerInfo_Base);

            this.addChild(this.moneyLabel);
            this.addChild(this.keyLabel);
            this.addChild(this.playerInfo_Health);
            this.addChild(this.playerInfo_Ecto);
            this.addChild(this.playerInfo_Map);
            this.addChild(this.playerInfo_Location);
        }
        private ChangeHealthInfo():void{
            
            switch(this.playerHealth){
                case 0:
                    this.playerInfo_Health = new createjs.Bitmap(managers.Game.assetManager.getResult("life_0-5"));
                    break;
                case 1:
                    this.playerInfo_Health = new createjs.Bitmap(managers.Game.assetManager.getResult("life_1-5"));
                    break;
                case 2:
                        this.playerInfo_Health = new createjs.Bitmap(managers.Game.assetManager.getResult("life_2-5"));
                    break;
                case 3:
                        this.playerInfo_Health = new createjs.Bitmap(managers.Game.assetManager.getResult("life_3-5"));
                    break;
                case 4:
                        this.playerInfo_Health = new createjs.Bitmap(managers.Game.assetManager.getResult("life_4-5"));
                    break;
                case 5:
                        this.playerInfo_Health = new createjs.Bitmap(managers.Game.assetManager.getResult("life_5-5"));
                    break;  
            }
            this.playerInfo_Health.x = 376;
            this.playerInfo_Health.y = 36;
        }
        private ChangeEctoInfo():void{
            
            switch(this.playerEcto){
                case 0:
                    this.playerInfo_Ecto = new createjs.Bitmap(managers.Game.assetManager.getResult("ecto_0-5"));
                    break;
                case 1:
                    this.playerInfo_Ecto = new createjs.Bitmap(managers.Game.assetManager.getResult("ecto_1-5"));
                    break;
                case 2:
                        this.playerInfo_Ecto = new createjs.Bitmap(managers.Game.assetManager.getResult("ecto_2-5"));
                    break;
                case 3:
                        this.playerInfo_Ecto = new createjs.Bitmap(managers.Game.assetManager.getResult("ecto_3-5"));
                    break;
                case 4:
                        this.playerInfo_Ecto = new createjs.Bitmap(managers.Game.assetManager.getResult("ecto_4-5"));
                    break;
                case 5:
                        this.playerInfo_Ecto = new createjs.Bitmap(managers.Game.assetManager.getResult("ecto_5-5"));
                    break;  
            }
            this.playerInfo_Ecto.x = 10;
            this.playerInfo_Ecto.y = 10;
        }
        private ChangePlayerLocation():void{
            this.playerInfo_Location.x = this.playerLocation.x;
            this.playerInfo_Location.y = this.playerLocation.y;
        }
    }
}