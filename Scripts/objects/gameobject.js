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
    var powerUp;
    (function (powerUp) {
        powerUp[powerUp["NONE"] = 0] = "NONE";
        powerUp[powerUp["SHADOW"] = 1] = "SHADOW";
    })(powerUp = objects.powerUp || (objects.powerUp = {}));
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(textureAtlas, imageString) {
            var _this = _super.call(this, textureAtlas, imageString) || this;
            _this.isDead = false;
            _this.name = imageString;
            _this.Init();
            return _this;
        }
        // Methods 
        GameObject.prototype.Init = function () {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            // from Yizhi: Why I change this is since: for AABB collision, 
            // it uses the left corner as x and y instead of the center of the object
            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;
            this.isColliding = false;
            this.isTakingDamage = false;
            this.powerUp = powerUp.NONE;
        };
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.Move = function () { };
        GameObject.prototype.CheckBound = function () { };
        GameObject.prototype.GetDamage = function (attacker) {
            this.hp -= attacker.attackPower;
            console.log(attacker.name + " dealt " + attacker.attackPower + " damage to " + this.name);
        };
        GameObject.prototype.SetPosition = function (position) {
            this.x = position.x;
            this.y = position.y;
        };
        GameObject.prototype.GetPosition = function () {
            return new math.Vec2(this.x, this.y);
        };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map