class Caracteristic
{
    id;
    name;
    value;

    constructor(id, value){
        this.id = id;
        this.name = Caracteristic.NAMES[id];
        this.value = value;
    }
}
Caracteristic.MAX_VALUE = 999999;
Caracteristic.ID_VITALITY = 0;
Caracteristic.ID_STRENGTH = 1;
Caracteristic.ID_AGILITY = 2;
Caracteristic.ID_BITE = 3;
Caracteristic.ID_STING = 4;
Caracteristic.NAMES = ['vitality', 'strength', 'agility', 'bite', 'sting'];

export default Caracteristic;