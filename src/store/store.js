
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'

export default new VueX.Store({
    actions,
    mutations,
    getters,
    state
});
