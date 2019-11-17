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
var scenes;
(function (scenes) {
    var Graveyard_1 = /** @class */ (function (_super) {
        __extends(Graveyard_1, _super);
        // Constructor
        function Graveyard_1() {
            var _this = _super.call(this, false, true, true, true) || this;
            _this.isDoorLeftLocked = managers.GraveyardLocks.graveyard_1_lockLeft;
            _this.isDoorRightLocked = managers.GraveyardLocks.graveyard_1_lockRight;
            _this.isDoorBotLocked = managers.GraveyardLocks.graveyard_1_lockBot;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_1.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderUp(new math.Vec2(120, 200), 350);
            // this.enemies[0].SetPosition(new math.Vec2(275, 430));
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 200), 350);
            this.enemies[2] = new objects.SpiderRight(new math.Vec2(400, 600), 350);
            this.enemies[3] = new objects.ShootingFLower(new math.Vec2(250, 300));
            var x = (config.Bounds.LEFT_BOUND + config.Bounds.RIGHT_BOUND) / 2;
            var y = (config.Bounds.TOP_BOUND + config.Bounds.BOTTOM_BOUND) / 2 + 150;
            /*
            this.cosmetics[0] = new objects.Indicator("wKeyIndicator");
            this.cosmetics[1] = new objects.Indicator("sKeyIndicator");
            this.cosmetics[2] = new objects.Indicator("aKeyIndicator");
            this.cosmetics[3] = new objects.Indicator("dKeyIndicator");
            this.cosmetics[4] = new objects.Indicator("jKeyIndicator");
            this.cosmetics[0].SetPosition(new math.Vec2(x,y-this.cosmetics[0].height));
            this.cosmetics[1].SetPosition(new math.Vec2(x,y+this.cosmetics[1].height));
            this.cosmetics[2].SetPosition(new math.Vec2(x-this.cosmetics[2].width,y));
            this.cosmetics[3].SetPosition(new math.Vec2(x+this.cosmetics[3].width,y));
            this.cosmetics[4].SetPosition(new math.Vec2(this.enemies[0].x,this.enemies[0].y - 100));
            */
            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
            _super.prototype.Start.call(this);
        };
        Graveyard_1.prototype.Update = function () {
            var _this = this;
            //if(!this.enemies[0].visible && this.cosmetics[0].visible){
            if (!this.enemies[0].visible) {
                setTimeout(function () {
                    /*
                    this.cosmetics.forEach(cosmetic =>{
                        cosmetic.visible = false;
                        managers.GraveyardLocks.graveyard_1_lockRight = false;
                        this.isDoorRightLocked = false;
                        managers.GraveyardLocks.graveyard_1_lockBot = false;
                        this.isDoorBotLocked = false;
                    });
                    */
                    managers.GraveyardLocks.graveyard_1_lockRight = false;
                    _this.isDoorRightLocked = false;
                    managers.GraveyardLocks.graveyard_1_lockBot = false;
                    _this.isDoorBotLocked = false;
                }, 1500);
            }
            if (!this.isDoorLeftLocked) {
                managers.GraveyardLocks.graveyard_1_lockLeft = false;
            }
            _super.prototype.Update.call(this);
            this.bulletManager.Update();
            // check if spiderBullets collides with player
            this.bulletManager.spiderBullets.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
            // check if spiderBulletsLeft collides with player
            this.bulletManager.spiderBulletsLeft.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
            // check if spiderBulletsRight collides with player
            this.bulletManager.spiderBulletsRight.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
            // check if shootingFlowerBullets collides with player
            this.bulletManager.shootingFLowerBullets.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
        };
        Graveyard_1.prototype.Main = function () {
            var _this = this;
            this.playerInfo.PlayerLocation = new math.Vec2(30, 12);
            _super.prototype.Main.call(this);
            this.bulletManager.spiderBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.bulletManager.spiderBulletsLeft.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.bulletManager.spiderBulletsRight.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.bulletManager.shootingFLowerBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
        };
        return Graveyard_1;
    }(scenes.PlayScene));
    scenes.Graveyard_1 = Graveyard_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_1.js.map