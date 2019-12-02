module managers{
    export class SlimePuddles{
        public static CheckEntitySlowdown(entity:objects.GameObject):boolean{
            for (let i = 0; i < managers.Game.slimePuddles.length; i++) {
                const element = managers.Game.slimePuddles[i];
                if(managers.Collision.Check((entity as objects.Player),element)){
                    return true;
                }
                else if(managers.Collision.Check((entity as objects.Enemy), element)){
                    return true;
                }
            }
            return false;
        }
    }
}