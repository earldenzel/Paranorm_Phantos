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
    // This is a debug room made for testing new enemies within the game
    var EnemyTest_Level = /** @class */ (function (_super) {
        __extends(EnemyTest_Level, _super);
        // Variables
        // Constructor
        function EnemyTest_Level() {
            var _this = _super.call(this, false, false, false, false, config.Design.HOTEL) || this;
            _this.hasProjectileShooters = true;
            _this.player.ecto = _this.player.maxEcto;
            //this.player.GainMaxHealth();
            _this.Start();
            return _this;
        }
        // Methods
        EnemyTest_Level.prototype.Start = function () {
            //this.obstacles[0] = new objects.SlimePuddle(1,new math.Vec2(165,520));
            //this.obstacles[1] = new objects.SlimePuddle(3,new math.Vec2(455,320));
            //this.obstacles[2] = new objects.SlimePuddle(0,new math.Vec2(326,600));
            //this.obstacles[3] = new objects.SlimePuddle(2,new math.Vec2(320,200));
            //
            //managers.Game.slimePuddles = [
            //    (this.obstacles[0] as objects.SlimePuddle),
            //    (this.obstacles[1] as objects.SlimePuddle),
            //    (this.obstacles[2] as objects.SlimePuddle),
            //    (this.obstacles[3] as objects.SlimePuddle)
            //];
            //this.enemies[0] = new objects.Undertaker(2);
            //this.enemies[0] = new objects.HotelManager(2,true,false);
            this.enemies[0] = new objects.LittleGirl(1, true, false);
            //this.enemies[0].hp = 1;
            //this.enemies[0] = new objects.GhostSlime();
            //this.enemies[1] = new objects.GhostSlime();
            //this.enemies[0] = new objects.GhostMan(2);
            //this.enemies[0] = new objects.Skeleton(new math.Vec2(300,300),2,true,false);
            _super.prototype.Start.call(this);
        };
        EnemyTest_Level.prototype.Update = function () {
            // To be added to the game if there's Slime Puddles in the level
            //this.player.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(this.player));
            //this.enemies.forEach(e =>{
            //    if(!e.isFlying){
            //         e.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(e));
            //    }
            //});
            _super.prototype.Update.call(this);
        };
        EnemyTest_Level.prototype.Main = function () {
            this.playerInfo.PlayerLocation = new math.Vec2(112, 34); // 30,12
            _super.prototype.Main.call(this);
        };
        return EnemyTest_Level;
    }(scenes.PlayScene));
    scenes.EnemyTest_Level = EnemyTest_Level;
})(scenes || (scenes = {}));
//# sourceMappingURL=enemytest.js.map