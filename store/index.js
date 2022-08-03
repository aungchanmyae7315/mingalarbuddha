import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({

        state: {

        },
        getters: {

        },
        mutations: {
            hideAutoVersionUpdate(state, hideAutoVersionUpdate) {
                localStorage.setItem('hideAutoUpdate', hideAutoVersionUpdate);
                state.hideAutoVersionUpdate = hideAutoVersionUpdate;

            },
        }
    })
}

export default createStore;