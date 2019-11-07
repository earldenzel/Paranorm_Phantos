var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            if (object1.visible && object2.visible) {
                var object1TopLeftX = object1.x - object1.halfW;
                var object1TopLeftY = object1.y - object1.halfH;
                var object2TopLeftX = object2.x - object2.halfW;
                var object2TopLeftY = object2.y - object2.halfH;
                return object1TopLeftX < object2TopLeftX + object2.width &&
                    object2TopLeftX < object1TopLeftX + object1.width &&
                    object1TopLeftY < object2TopLeftY + object2.height &&
                    object2TopLeftY < object1TopLeftY + object1.height;
            }
        };
        Collision.CheckWithOffset = function (object1, object2, topOffset, bottomOffset, rightOffset, leftOffset) {
            if (object1.visible && object2.visible) {
                var object1TopLeftX = object1.x - object1.halfW;
                var object1TopLeftY = object1.y - object1.halfH;
                var object2TopLeftX = object2.x - object2.halfW;
                var object2TopLeftY = object2.y - object2.halfH;
                return object1TopLeftX < object2TopLeftX - rightOffset + object2.width &&
                    object2TopLeftX < object1TopLeftX - leftOffset + object1.width &&
                    object1TopLeftY < object2TopLeftY - topOffset + object2.height &&
                    object2TopLeftY < object1TopLeftY - bottomOffset + object1.height;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map