<template>
  <div id="app" class="bg-wh sh">
    <p>투두리스트</p>
    <input type="text" v-model="value" @keydown.enter="addTodo" placeholder="오늘의 해야할 일을 적어주세요." />
    <div class="todoList">
      <Active />
      <Done />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Active from './components/active.vue';
import Done from './components/done.vue';


export default {
  name : 'app',
  data() {
    return {
      value : ''
    }
  },
  computed: {
    ...mapGetters({
      getList : 'getList'
    })
  },
  methods : {
    ...mapMutations({
      addList : 'addList',
      removeList : 'removeList',
      stateChange : 'stateChange'
    }),
    addTodo() {
      this.addList({
        label : this.value,
        done : false,
        idx : this.getList.length
      });
      this.value = "";
    }
  },
  components : {
    Active : Active,
    Done : Done
  }
}
</script>

<style>
  body {
  
  }
  #app {
    width:80%;
    height: 70vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
  }
  .bg-wh {
    background-color: #fff;
  }
  .sh {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  }
  .todoList {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    position: relative;
  }
  button {
    display: block;
    width: 100%;
    text-align: center;
    height: 60px;
  }
  .box {
    width: 40% ;
    height: 100%;
    text-align: center;
  }
  .on {
    position: absolute;
  }
  span {
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    line-height: 40px;
    background:#ccc;
  }
  .btn {
    position: relative;
  }
</style>
