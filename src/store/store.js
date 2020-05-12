import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todoList : []
    },
    getters: {
        getList : (state)=>{
            return state.todoList
        },
        selectList : (state)=>(type)=> {
            return state.todoList.filter( ele => ele.done === type)
        }
    },
    mutations: {
        addList: function(state, payload) {
            return state.todoList.push(payload);
        },
        stateChange: function(state, payload) {
            // 질문 할 것.
            let todoList = state.todoList;
            return todoList[payload].done = !todoList[payload].done;
        },
        removeList: function(state, payload) {
            const update = state.todoList.filter(ele => ele.idx !== payload)
            const newTodoList = update.map(ele=>{
                Object.assign({},ele,{
                    idx : payload
                });
            })
            return state.todoList = newTodoList;
        }
    }
});

export default store;