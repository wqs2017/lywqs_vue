/**
 * Created by wqs on 2017/12/18.
 */
/**
 * Created by wqs on 2017/11/29.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  count:1,
};

const mutations={
  add(state){
    state.count+=1;
  },
  sub(state){
    state.count--;
  }
};

const getters = {
  count:function(state){
    return state.count +=100;
  }
};

const actions ={
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('sub')},3000);
    console.log('我比sub提前执行');
  },
  subAction({commit}){
    commit('sub')
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
