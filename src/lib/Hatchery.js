import Critter from '../lib/Critter';

class Hatchery {
    constructor() {
        this.King = new Critter();
        this.Queen = new Critter();
        this.HatcheryKing = [new Critter(), new Critter()];
        this.HatcheryQueen = [new Critter(), new Critter()];
        this.HatcheryKingMaxSize = 1;
        this.HatcherYQueenMaxSize = 1;
    }
}

export default Hatchery