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
    var SlimeBall = /** @class */ (function (_super) {
        __extends(SlimeBall, _super);
        // Constructor
        function SlimeBall() {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "SlimeBall", 2) || this;
            _this.staticNotPositional = false;
            _this.Start();
            return _this;
        }
        SlimeBall.prototype.Start = function () {
            this.Reset();
        };
        SlimeBall.prototype.Update = function () {
            if (this.farPointPosition || this.staticNotPositional) {
                this.Move();
            }
            if (managers.Collision.Check(managers.Game.player.weapon, this)) {
                this.Reset();
            }
            if (!this.staticNotPositional) {
                if (managers.Collision.Check(managers.Game.player, this)) {
                    if (!managers.Game.player.activatePowers && managers.Game.player.powerUp != config.PowerUp.SHADOW) {
                        var ticker = createjs.Ticker.getTicks();
                        // use ticker to restrict 1 bullet every 10 frames for damage
                        if (ticker % 10 == 0) {
                            managers.Game.player.GetDamage(this);
                            this.Reset();
                        }
                    }
                }
            }
            else {
                if (this.x > config.Bounds.RIGHT_BOUND + this.width || this.x < config.Bounds.LEFT_BOUND - this.width ||
                    this.y < config.Bounds.TOP_BOUND - this.height || this.y > config.Bounds.BOTTOM_BOUND + this.height) {
                    this.Reset();
                }
            }
        };
        SlimeBall.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        SlimeBall.prototype.Move = function () {
            if (!this.staticNotPositional) {
                var slimeBallPosition = new math.Vec2(this.x, this.y);
                var dirToFarPoint = math.Vec2.Subtract(slimeBallPosition, this.farPointPosition);
                var distanceToFarPoint = math.Vec2.Distance(slimeBallPosition, this.farPointPosition);
                var newPos = math.Vec2.Add(slimeBallPosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 2));
                this.x = newPos.x;
                this.y = newPos.y;
            }
            else {
                switch (this.direction) {
                    case config.Direction.UP:
                        this.y -= 2;
                        break;
                    case config.Direction.DOWN:
                        this.y += 2;
                        break;
                    case config.Direction.RIGHT:
                        this.x += 2;
                        break;
                    case config.Direction.LEFT:
                        this.x -= 2;
                        break;
                }
            }
        };
        SlimeBall.prototype.Main = function () { };
        SlimeBall.prototype.CheckBounds = function () { };
        return SlimeBall;
    }(objects.Bullet));
    objects.SlimeBall = SlimeBall;
})(objects || (objects = {}));
//# sourceMappingURL=slimeball.js.map