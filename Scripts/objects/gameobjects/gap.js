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
    var Gap = /** @class */ (function (_super) {
        __extends(Gap, _super);
        // Constructor
        function Gap(textureAtlas, imageString, position) {
            var _this = _super.call(this, textureAtlas, imageString) || this;
            _this.position = position;
            _this.Start();
            return _this;
        }
        // Methods
        Gap.prototype.Start = function () {
            this.SetPosition(this.position);
        };
        Gap.prototype.Update = function () { };
        Gap.prototype.Reset = function () { };
        Gap.prototype.Move = function () { };
        Gap.prototype.CheckBound = function () {
        };
        Gap.prototype.CheckGapDamage = function (entity) {
            if (entity.fallSequence > 0) {
                return;
            }
            var leftX = this.x - this.halfW + config.Bounds.OBSTACLE_OFFSET;
            var rightX = this.x + this.halfW + config.Bounds.OBSTACLE_OFFSET;
            var topY = this.y - this.halfH + config.Bounds.OBSTACLE_OFFSET;
            var botY = this.y + this.halfH;
            var entityFeetX = entity.x + entity.halfW;
            var entityFeetY = entity.y + entity.halfH;
            if ((entityFeetX > leftX && entityFeetX < rightX && entityFeetY > topY && entityFeetY < botY)
                || (entity instanceof objects.Enemy && entity.isStunned && entity.isFlying)) {
                entity.SetPosition(new math.Vec2(leftX, this.y));
                //if enemy is entity, and a fall sequence was not defined, then define call sequence
                //remove all view and keyboard, then after 1 second, transfer to original position
                if (entity instanceof objects.Player && managers.Game.player.fallSequence == 0) {
                    managers.Game.keyboardManager.ControlReset();
                    setTimeout(function () {
                        entity.visible = false;
                    }, 200);
                    entity.weapon.visible = false;
                    entity.FallMessage();
                    entity.hp -= 1;
                    if (entity.hp <= 0) {
                        entity.DeathSequence();
                    }
                    managers.Game.player.fallSequence = setTimeout(function () {
                        entity.isTakingDamage = false;
                        entity.SetPosition(entity.lastPosition);
                        if (entity.hp > 0) {
                            entity.visible = true;
                        }
                        managers.Game.keyboardManager.enabled = true;
                        managers.Game.player.fallSequence = 0;
                        // Sound Effect
                        // Not Defined yet                                
                    }, 1000);
                }
                else if (entity instanceof objects.Enemy && entity.fallSequence == 0) {
                    entity.fallSequence = setTimeout(function () {
                        entity.fallSequence = 0;
                        entity.RemoveFromPlay(entity.CalculateBounty());
                        // Sound Effect
                        // Not Defined yet                                
                    }, 1000);
                }
            }
        };
        return Gap;
    }(objects.GameObject));
    objects.Gap = Gap;
})(objects || (objects = {}));
//# sourceMappingURL=gap.js.map