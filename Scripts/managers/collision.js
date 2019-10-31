var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            if (object1.visible && object2.visible) {
                // create 2 temp Vec2 objects used for collision detection
                //let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
                //let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);
                return object1.x < object2.x + object2.width &&
                    object2.x < object1.x + object1.width &&
                    object1.y < object2.y + object2.height &&
                    object2.y < object1.y + object1.height;
                /*
                if (math.Vec2.Distance(P1, P2) < (object1.halfH + object2.halfH)) {
                    if (!object2.isColliding) {
                        // react to our collision
                        console.log("Collision with " + object2.name);
                        object2.isColliding = true;
                    }
                } else {
                    object2.isColliding = false;
                }
    
                return object2.isColliding;
                */
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map