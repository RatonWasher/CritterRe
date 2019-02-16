import Criterra from '../lib/Criterra';


class Hatchery {
    constructor() {
        this.King = new Criterra()
        this.Queen = new Criterra();
        this.HatcheryKing = [new Criterra(), new Criterra()];
        this.HatcheryQueen = [new Criterra(), new Criterra()];
        this.HatcheryKingMaxSize = 1;
        this.HatcherYQueenMaxSize = 1;

    }
}

export default Hatchery