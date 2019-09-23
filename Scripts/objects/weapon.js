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
    var Weapon = /** @class */ (function (_super) {
        __extends(Weapon, _super);
        // Variables
        // Constructor
        function Weapon(assetManager, player) {
            var _this = _super.call(this, assetManager, "weapon") || this;
            _this.Start();
            return _this;
        }
        // Methods
        // Initializing our variables with default values
        Weapon.prototype.Start = function () {
        };
        // Updated 60 times per second (60FPS)
        Weapon.prototype.Update = function () {
        };
        // Resets the position of the object
        Weapon.prototype.Reset = function () {
        };
        // Move the object
        Weapon.prototype.Move = function () {
        };
        // Collision Detection 
        Weapon.prototype.CheckBound = function () {
        };
        return Weapon;
    }(objects.GameObject));
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map