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
        Collision.CheckWithOffsetAndDirection = function (object1, object2, topOffset, bottomOffset, rightOffset, leftOffset, direction) {
            switch (direction) {
                case config.Direction.UP:
                    topOffset += object2.height;
                    break;
                case config.Direction.DOWN:
                    bottomOffset += object2.height;
                    break;
                case config.Direction.LEFT:
                    rightOffset += (object2.width - object2.halfW / 2);
                    break;
                case config.Direction.RIGHT:
                    leftOffset += (object2.width - object2.halfW / 2);
                    break;
            }
            return this.CheckWithOffset(object1, object2, topOffset, bottomOffset, rightOffset, leftOffset);
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map