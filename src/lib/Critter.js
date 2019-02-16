import Caracteristic from './Caracteristic';

class Critter
{
    id;
    generation;
    gender;
    job;
    caracteristics;

    constructor(/*generation, gender*/){
        this.id = this.generateId();
        //this.generation = generation;
        this.gender = 'MALE';
        this.currentHealth = 0;
        this.caracteristics = [];
        this.caracteristics.push(new Caracteristic(Caracteristic.ID_VITALITY, 5));
        this.caracteristics.push(new Caracteristic(Caracteristic.ID_STRENGTH, 6));
        this.caracteristics.push(new Caracteristic(Caracteristic.ID_AGILITY, 5));
        this.caracteristics.push(new Caracteristic(Caracteristic.ID_BITE, 7));
        this.caracteristics.push(new Caracteristic(Caracteristic.ID_STING, 6));
    };

    get score(){
        return 5;
    }

    generateId(){
        //Return current value then increment it
        return Critter.idCount++;
    }
}
Critter.idCount = 0;
Critter.generationCount = 1;

export default Critter;