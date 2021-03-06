module managers {
    export class Collision {
        
        public static Check(object1: objects.GameObject, object2: objects.GameObject): boolean  {
            if(object1.visible && object2.visible) {
                let object1TopLeftX = object1.x - object1.halfW;
                let object1TopLeftY = object1.y - object1.halfH;
                let object2TopLeftX = object2.x - object2.halfW;
                let object2TopLeftY = object2.y - object2.halfH;
                
                return object1TopLeftX < object2TopLeftX + object2.width &&
                    object2TopLeftX < object1TopLeftX + object1.width &&
                    object1TopLeftY < object2TopLeftY + object2.height &&
                    object2TopLeftY < object1TopLeftY + object1.height;
            }
        }

        public static CheckWithOffset(object1: objects.GameObject, 
                                        object2: objects.GameObject, 
                                        topOffset: number,
                                        bottomOffset: number,
                                        rightOffset: number,
                                        leftOffset: number
                                        ): boolean  {
            if(object1.visible && object2.visible) {
                let object1TopLeftX = object1.x - object1.halfW;
                let object1TopLeftY = object1.y - object1.halfH;
                let object2TopLeftX = object2.x - object2.halfW;
                let object2TopLeftY = object2.y - object2.halfH;
                
                return object1TopLeftX < object2TopLeftX - rightOffset + object2.width &&
                    object2TopLeftX < object1TopLeftX - leftOffset + object1.width &&
                    object1TopLeftY < object2TopLeftY - topOffset+ object2.height &&
                    object2TopLeftY < object1TopLeftY - bottomOffset  + object1.height;
            }
        }

        public static CheckWithOffsetAndDirection(object1: objects.GameObject, 
                                        object2: objects.GameObject, 
                                        topOffset: number,
                                        bottomOffset: number,
                                        rightOffset: number,
                                        leftOffset: number,
                                        direction: config.Direction
                                        ): boolean  {
            switch(direction){
                case config.Direction.UP:
                    topOffset += object2.height;
                    break;
                case config.Direction.DOWN:
                    bottomOffset += object2.height;
                    break;
                case config.Direction.LEFT:
                    rightOffset += (object2.width - object2.halfW/2);
                    break;
                case config.Direction.RIGHT:
                    leftOffset += (object2.width - object2.halfW/2);
                    break;
            }
            return this.CheckWithOffset(object1, object2, topOffset, bottomOffset, rightOffset, leftOffset);
        }
    }
}