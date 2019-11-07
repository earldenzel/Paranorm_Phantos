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
        function Gap(imageString, position) {
            var _this = _super.call(this, imageString) || this;
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
            var gapTopLeftX = this.x - this.halfW;
            var gapTopLeftY = this.y - this.halfH;
            var entityFeetX = entity.x;
            var entityFeetY = entity.y + entity.halfH;
            if (entityFeetX > gapTopLeftX && entityFeetX < (gapTopLeftX + this.width) && entityFeetY > gapTopLeftY && entityFeetY < (gapTopLeftY + this.height)) {
                if (entity instanceof objects.Player) {
                    entity.hp -= 1;
                    entity.SetPosition(entity.lastPosition);
                    entity.Update();
                }
                else if (entity instanceof objects.Enemy) {
                    if (!entity.isFlying) {
                        entity.RemoveFromPlay(entity.CalculateBounty());
                    }
                }
            }
        };
        return Gap;
    }(objects.GameObject));
    objects.Gap = Gap;
})(objects || (objects = {}));
//# sourceMappingURL=gap.js.map