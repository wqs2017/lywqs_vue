<template>
  <div class="hello">
    <div>hello world</div>
    <div>{{$store.state.count}}---{{count}}</div>
    <button @click="add">+</button>
    <button @click="$store.commit('sub')">-</button>
    <button @click="addAction">+</button>
    <button @click="subAction">-</button>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  store,
  computed:{
    ...mapState(['count']),
//        count(){
//            return this.$store.getters.count;
//        }
    ...mapGetters(['count']),
  },
  methods:{
    ...mapMutations(['add','sub']),
    ...mapActions(['addAction','subAction']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
