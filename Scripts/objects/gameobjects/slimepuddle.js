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
    var SlimePuddle = /** @class */ (function (_super) {
        __extends(SlimePuddle, _super);
        // Constructor
        function SlimePuddle(imageNumber, position) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "SlimePuddle1") || this;
            _this.types = [
                "SlimePuddle1",
                "SlimePuddle2",
                "SlimePuddle3",
                "SlimePuddle4"
            ];
            // Change the animation right away
            _this.gotoAndPlay(_this.types[imageNumber]);
            _this.position = position;
            _this.Start();
            return _this;
        }
        SlimePuddle.prototype.Start = function () {
            this.SetPosition(this.position);
        };
        SlimePuddle.prototype.Update = function () { };
        SlimePuddle.prototype.Reset = function () { };
        SlimePuddle.prototype.Move = function () { };
        SlimePuddle.prototype.CheckBound = function () {
        };
        SlimePuddle.prototype.CheckEntity = function (entity) {
            // This checks the entity position and the puddle position
            // Similar to the Gap gameObject but it reduces the speed of the entities by half
            // Doesn't affect any of the flying entities
            var offset = -config.Bounds.OBSTACLE_OFFSET;
            var gapTopLeftX = this.x - this.halfW - offset;
            var gapTopLeftY = this.y - this.halfH - offset;
            var gapBotRightX = gapTopLeftX + this.width + offset;
            var gapBotRightY = this.y + this.width + offset;
            var entityFeetX = entity.x;
            var entityFeetY = entity.y + entity.halfH;
            if (entityFeetX > gapTopLeftX && entityFeetX < gapBotRightX && entityFeetY > gapTopLeftY && entityFeetY < gapBotRightY) {
                if (entity instanceof objects.Player) {
                    entity.AlterSpeed(true);
                }
                else if (entity instanceof objects.Enemy && !entity.isFlying) {
                    entity.AlterSpeed(true);
                }
            }
            else {
                if (entity instanceof objects.Player) {
                    entity.AlterSpeed(false);
                }
                else if (entity instanceof objects.Enemy && !entity.isFlying) {
                    entity.AlterSpeed(false);
                }
            }
        };
        return SlimePuddle;
    }(objects.GameObject));
    objects.SlimePuddle = SlimePuddle;
})(objects || (objects = {}));
//# sourceMappingURL=slimepuddle.js.map