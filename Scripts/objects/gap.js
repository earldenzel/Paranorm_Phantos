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
            var offset = -config.Bounds.OBSTACLE_OFFSET;
            var gapTopLeftX = this.x - this.halfW - offset;
            var gapTopLeftY = this.y - this.halfH - offset;
            var gapBotRightX = gapTopLeftX + this.width + offset;
            var gapBotRightY = this.y + this.width + offset;
            var entityFeetX = entity.x;
            var entityFeetY = entity.y + entity.halfH;
            if (entityFeetX > gapTopLeftX && entityFeetX < gapBotRightX && entityFeetY > gapTopLeftY && entityFeetY < gapBotRightY) {
                //if enemy is entity, and a fall sequence was not defined, then define call sequence
                //remove all view and keyboard, then after 1 second, transfer to original position
                if (entity instanceof objects.Player && managers.Game.player.fallSequence == 0) {
                    entity.visible = false;
                    entity.weapon.visible = false;
                    entity.FallMessage();
                    managers.Game.keyboardManager.moveLeft = false;
                    managers.Game.keyboardManager.moveRight = false;
                    managers.Game.keyboardManager.moveUp = false;
                    managers.Game.keyboardManager.moveDown = false;
                    managers.Game.keyboardManager.enabled = false;
                    managers.Game.keyboardManager.attacking = false;
                    managers.Game.keyboardManager.biting = false;
                    managers.Game.player.fallSequence = setTimeout(function () {
                        entity.hp -= 1;
                        entity.isTakingDamage = false;
                        entity.SetPosition(entity.lastPosition);
                        entity.Update();
                        entity.visible = true;
                        managers.Game.keyboardManager.enabled = true;
                        managers.Game.player.fallSequence = 0;
                        // Sound Effect
                        // Not Defined yet                                
                    }, 1000);
                }
                else if (entity instanceof objects.Enemy && !entity.isFlying) {
                    entity.RemoveFromPlay(entity.CalculateBounty());
                }
            }
        };
        return Gap;
    }(objects.GameObject));
    objects.Gap = Gap;
})(objects || (objects = {}));
//# sourceMappingURL=gap.js.map