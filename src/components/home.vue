<template>
    <div class="container">
        <div class="action">
            <input type="text" v-model="value" @keydown.enter="addTodo"/>
        </div>      
        
        <div class="todoList">
            <Todo :value="false" v-bind:key="active" />
            <Todo :value="true" v-bind:key="done" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Todo from './Todo.vue';

export default {
    data() {
    return {
        active: "active",
        done: "done",
        value: '',
        type: false,
        todoList: []
    };
  }, 
  computed: {
    ...mapGetters({
      getList : 'getList'
    })
  },
  created() {
    this.beginning();
  },
  methods: {
    ...mapActions({
      addLocal : 'addList'
    }),
    ...mapMutations({
      addList : 'addTodo',
      beginning : 'beginning'
    }),
    addTodo() {
      this.addList({
        todo : this.value,
        idx : this.getList.length,
        done : false
      }),
      this.value = '';
      this.addLocal();
    }
  },
  components: {
    Todo
  }
}
</script>

<style>
    #app {
    width:80%;
    height: 70vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
  }
  input {
    border: 1px solid #ccc;
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
  .box {
    width: 40% ;
    height: 100%;
    text-align: center;
  }
  .btn {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    height: 60px;
  }
</style>