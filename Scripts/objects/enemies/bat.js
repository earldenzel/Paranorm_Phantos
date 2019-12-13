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
var objects;
(function (objects) {
    var Bat = /** @class */ (function (_super) {
        __extends(Bat, _super);
        // constructors
        function Bat(moveSpeed, updateTime) {
            var _this = _super.call(this, managers.Game.bat_TextureAtlas, "bat") || this;
            _this.Start();
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 500;
            _this.updateTime = updateTime;
            _this.currentTime = updateTime;
            _this.isFlying = true;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.DEFAULT, _this.GetPosition(), 0);
            return _this;
        }
        // methods
        Bat.prototype.Start = function () {
            // set the initial position
            this.y = 200;
            this.x = 320;
            this.trajectory = new math.Vec2(0, 0);
            var stageOfSpawn = managers.Game.currentStage.design;
            switch (stageOfSpawn) {
                case config.Design.GRAVEYARD:
                    this.hp = 3;
                    this.attackPower = 1;
                    this.bounty = 2;
                    this.expGain = 3;
                    break;
                case config.Design.HOTEL:
                    this.hp = 13;
                    this.attackPower = 1;
                    this.bounty = 9;
                    this.expGain = 5;
                    break;
                case config.Design.MANSION:
                    this.hp = 23;
                    this.attackPower = 2;
                    this.bounty = 15;
                    this.expGain = 7;
                    break;
            }
        };
        Bat.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Bat.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        Bat.prototype.Move = function () {
            this.currentTime -= 1;
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (this.currentTime == 0) {
                this.trajectory = math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed);
                this.currentTime = this.updateTime;
            }
            var newPos = math.Vec2.Add(enemyPosition, this.trajectory);
            this.x = newPos.x;
            this.y = newPos.y;
        };
        Bat.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        Bat.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(2);
        };
        return Bat;
    }(objects.Enemy));
    objects.Bat = Bat;
})(objects || (objects = {}));
//# sourceMappingURL=bat.js.map