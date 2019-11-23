var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var managers;
(function (managers) {
    var PlayerInfo_UI = /** @class */ (function (_super) {
        __extends(PlayerInfo_UI, _super);
        // Constructor
        function PlayerInfo_UI() {
            var _this = _super.call(this) || this;
            _this.InIt();
            return _this;
        }
        Object.defineProperty(PlayerInfo_UI.prototype, "Money", {
            // Add in Player Location
            // Getters and Setters
            get: function () {
                return this.money;
            },
            set: function (newMoney) {
                this.money = newMoney;
                this.moneyLabel.text = "";
                if (this.money > 99999999) {
                    this.moneyLabel.text = "99999999";
                }
                else {
                    var numberOfZeros = 8 - String(this.money).length;
                    for (var i = 0; i < numberOfZeros; i++) {
                        this.moneyLabel.text += "0";
                    }
                    this.moneyLabel.text += this.money.toString();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "Key", {
            get: function () {
                return this.key;
            },
            set: function (newKey) {
                this.key = newKey;
                var numberOfZeros = 2 - String(this.key).length;
                this.keyLabel.text = "";
                if (this.key > 99) {
                    this.keyLabel.text = "99";
                }
                else {
                    var numberOfZeros_1 = 2 - String(this.key).length;
                    for (var i = 0; i < numberOfZeros_1; i++) {
                        this.keyLabel.text += "0";
                    }
                    this.keyLabel.text = this.Key.toString();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerHealth", {
            get: function () {
                return this.playerHealth;
            },
            set: function (newPlayerHealth) {
                this.removeFlowers();
                this.playerHealth = newPlayerHealth;
                this.ChangeHealthInfo();
                this.addFlowers();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerMaxHealth", {
            get: function () {
                return this.playerMaxHealth;
            },
            set: function (newPlayerMaxHealth) {
                this.removeFlowers();
                this.playerMaxHealth = newPlayerMaxHealth;
                this.ChangeHealthInfo();
                this.addFlowers();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerEcto", {
            get: function () {
                return this.PlayerEcto;
            },
            set: function (newPlayerEcto) {
                this.playerEcto = newPlayerEcto;
                this.removeChild(this.playerInfo_Ecto);
                this.ChangeEctoInfo();
                this.addChild(this.playerInfo_Ecto);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerLocation", {
            get: function () {
                return this.playerLocation;
            },
            set: function (newCoordinates) {
                this.playerLocation = newCoordinates;
                this.removeChild(this.playerInfo_Location);
                this.ChangePlayerLocation();
                this.addChild(this.playerInfo_Location);
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        PlayerInfo_UI.prototype.InIt = function () {
            // Create Base
            this.playerInfo_Base = new createjs.Bitmap(managers.Game.assetManager.getResult("ui_playerinfo"));
            // Create Labels
            this.moneyLabel = new objects.Label("00000000", "16px", "'Press Start 2P'", "#FFFFFF", 236, 20, false);
            this.keyLabel = new objects.Label("00", "16px", "'Press Start 2P'", "#FFFFFF", 250, 77, false);
            this.playerInfo_Map = new createjs.Sprite(managers.Game.map_TextureAtlas, "MapsGraveyard_UnlockABC");
            this.playerInfo_Map.x = 30;
            this.playerInfo_Map.y = 12;
            this.playerInfo_Location = new createjs.Sprite(managers.Game.map_TextureAtlas, "MapsGraveyard_PlayerLocation");
            this.playerInfo_Health = new Array();
            // Set Defaults
            this.playerHealth = 5;
            this.playerEcto = 5;
            this.playerMaxHealth = 5;
            this.money = 0;
            this.key = 0;
            this.playerLocation = new math.Vec2(0, 0);
            this.ChangePlayerLocation();
            this.ChangeHealthInfo();
            this.ChangeEctoInfo();
            this.Main();
        };
        PlayerInfo_UI.prototype.Main = function () {
            var _this = this;
            // Add to the Player Information Container
            this.addChild(this.playerInfo_Base);
            this.addChild(this.moneyLabel);
            this.addChild(this.keyLabel);
            this.playerInfo_Health.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.playerInfo_Ecto);
            this.addChild(this.playerInfo_Map);
            this.addChild(this.playerInfo_Location);
        };
        PlayerInfo_UI.prototype.ChangeHealthInfo = function () {
            var maximumFlower = this.playerMaxHealth / 5;
            var currentHp = this.playerHealth;
            var flower;
            for (var index = 0; index < maximumFlower; index++) {
                flower = new createjs.Bitmap(managers.Game.assetManager.getResult("life_0-5"));
                ;
                if (currentHp >= 5) {
                    flower = new createjs.Bitmap(managers.Game.assetManager.getResult("life_5-5"));
                    currentHp -= 5;
                }
                else {
                    switch (currentHp) {
                        case 1:
                            flower = new createjs.Bitmap(managers.Game.assetManager.getResult("life_1-5"));
                            break;
                        case 2:
                            flower = new createjs.Bitmap(managers.Game.assetManager.getResult("life_2-5"));
                            break;
                        case 3:
                            flower = new createjs.Bitmap(managers.Game.assetManager.getResult("life_3-5"));
                            break;
                        case 4:
                            flower = new createjs.Bitmap(managers.Game.assetManager.getResult("life_4-5"));
                            break;
                    }
                    currentHp = 0;
                }
                this.playerInfo_Health[index] = flower;
                this.playerInfo_Health[index].x = 376 + flower.image.width * index;
                this.playerInfo_Health[index].y = 36;
            }
        };
        PlayerInfo_UI.prototype.ChangeEctoInfo = function () {
            switch (this.playerEcto) {
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
        };
        PlayerInfo_UI.prototype.ChangePlayerLocation = function () {
            this.playerInfo_Location.x = this.playerLocation.x;
            this.playerInfo_Location.y = this.playerLocation.y;
        };
        PlayerInfo_UI.prototype.removeFlowers = function () {
            var _this = this;
            this.playerInfo_Health.forEach(function (e) {
                _this.removeChild(e);
            });
            this.playerInfo_Health = new Array();
        };
        PlayerInfo_UI.prototype.addFlowers = function () {
            var _this = this;
            this.playerInfo_Health.forEach(function (e) {
                _this.addChild(e);
            });
        };
        return PlayerInfo_UI;
    }(createjs.Container));
    managers.PlayerInfo_UI = PlayerInfo_UI;
})(managers || (managers = {}));
//# sourceMappingURL=playerinfo.js.map