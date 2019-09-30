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
    var TestEnemy = /** @class */ (function (_super) {
        __extends(TestEnemy, _super);
        // variables
        // constructors
        function TestEnemy(assetManager) {
            var _this = _super.call(this, assetManager, "testEnemy") || this;
            _this.Start();
            _this.hp = 2;
            _this.isStunned = false;
            _this.attackPower = 2;
            return _this;
        }
        // methods
        TestEnemy.prototype.Start = function () {
            // set the initial position
            this.y = 400;
            this.x = 320;
        };
        TestEnemy.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.Move();
            this.CheckBound(); // <-- Check collisions
        };
        TestEnemy.prototype.Reset = function () { };
        TestEnemy.prototype.Move = function () { };
        TestEnemy.prototype.CheckBound = function () { };
        return TestEnemy;
    }(objects.Enemy));
    objects.TestEnemy = TestEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=testenemy.js.map