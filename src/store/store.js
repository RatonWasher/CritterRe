import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store;

const initStore = async () => {
    let initState;
    try{
        //Load save if existing
    }
    catch(err){
        //Create new save
    };

    store = new Vuex.Store({
        state: initState, //State
        getters: { //Return values
            state: state => state
        },
        mutations: {}, //Change state
        actions: {} //Commit mutations
    });

    return store;
}

export default (cb, reinitialize = false) => {
    if (store && !reinitialize) {
      cb(store);
    } else {
      initStore().then(cb)
    }
  }
  