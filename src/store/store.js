import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todoList : []
    },
    getters: {
        getList: state => {
            return state.todoList
        },
        selectList: state => type => {
            return state.todoList.filter( ele => ele.done === type)
        },
        detail: state => idx => {
            return state.todoList[idx]
        }
    },
    mutations: {
        beginning(state) {
            const Todo = localStorage.getItem("Todo");
            if(Todo) {
                const list = JSON.parse(Todo);
                state.todoList = list.todoList
            }
            return
        },
        addTodo(state, payload) {
            return state.todoList.push(payload);
        },
        removeTodo(state, payload) {
            const newList = state.todoList.filter( ele => ele.idx !== payload);
            const reset = state.todoList = newList.map((ele, idx) => {
                return Object.assign({}, ele, {
                    idx : idx
                })
            });
            return state.todoList = reset
        },
        changeTodo(state, payload) {
            let todo = state.todoList;
            return todo[payload].done = !todo[payload].done
        },
        localSave: function(state) {
            const todoList = JSON.stringify(state);
            localStorage.setItem("Todo", todoList);
        }
    },
    actions: {
        addList: function (context) {
            return setTimeout(function(){
                context.commit("localSave");
            },0)
        }
    }
});

export default store;