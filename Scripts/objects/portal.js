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
    var Portal = /** @class */ (function (_super) {
        __extends(Portal, _super);
        // Constructor
        function Portal(assetManager, imageString, destinationCoordinates, destinationStage) {
            var _this = _super.call(this, assetManager, imageString) || this;
            _this.destinationCoordinates = destinationCoordinates;
            _this.destinationStage = destinationStage;
            _this.Start();
            return _this;
        }
        // Methods
        Portal.prototype.Start = function () {
        };
        Portal.prototype.Update = function () {
            if (managers.Collision.Check(objects.Game.player, this)) {
                objects.Game.currentScene = this.destinationStage;
                objects.Game.player.SetPosition(this.destinationCoordinates);
            }
        };
        Portal.prototype.Reset = function () { };
        Portal.prototype.Move = function () { };
        Portal.prototype.CheckBound = function () { };
        return Portal;
    }(objects.GameObject));
    objects.Portal = Portal;
})(objects || (objects = {}));
//# sourceMappingURL=portal.js.map