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
    //export interface Controller<T> { [key: string]: T };
    var DeadPlayer = /** @class */ (function (_super) {
        __extends(DeadPlayer, _super);
        //Constructor
        function DeadPlayer(variant, mirrorX, mirrorY) {
            if (mirrorX === void 0) { mirrorX = false; }
            if (mirrorY === void 0) { mirrorY = false; }
            var _this = _super.call(this, managers.Game.phoebe_TextureAtlas, variant) || this;
            if (mirrorX) {
                _this.scaleX = -1;
            }
            if (mirrorY) {
                _this.scaleY = -1;
            }
            _this.visible = false;
            return _this;
        }
        // Methods
        DeadPlayer.prototype.Start = function () {
        };
        DeadPlayer.prototype.Update = function () {
            if (this.name === "Phoebe_Dead_A") {
                this.y -= 2.8;
            }
            else {
                this.x += (this.scaleX > 0) ? 2 : -2;
                this.y += (this.scaleY > 0) ? -2 : 2;
            }
        };
        DeadPlayer.prototype.Reset = function () { };
        DeadPlayer.prototype.Move = function () {
        };
        DeadPlayer.prototype.CheckBound = function () {
        };
        return DeadPlayer;
    }(objects.GameObject));
    objects.DeadPlayer = DeadPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=deadplayer.js.map