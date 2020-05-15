<template>
  <div>
    <div class="active">
      <template v-for="item in list(value)">
        <div
          class="btn sh bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          v-bind:key="item.idx">
					<button class="compl" :class="{'off': item.done === false, 'on' : item.done === true}" @click="clickEvent(change, item.idx)" v-bind:key="item.idx" >
					</button>		
				<router-link :to="`/detail${item.idx}`">
					<p>{{item.todo}}</p>
				</router-link>
          <span @click="clickEvent(removeTodo, item.idx)">제거</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    props: ['value'],
    computed : {
      ...mapGetters({
        list : 'selectList'
      })
		},
		// created() {
		// 	window.addEventListener("mousemove", this.mouseMove);
		// },
		// beforeDestroy() {
		// 	window.removeEventListener("mousemove", this.mouseMove);
		// },
    methods: {
			...mapActions({
				addLocal : 'addList'
			}),
      ...mapMutations({
        change : 'changeTodo',
        removeTodo : 'removeTodo'
			}),
			clickEvent(mutation, idx) {
				mutation(idx);
				this.addLocal();
			},
			mouseMove(e) {
				let x = e.clientX;
				let y = e.clientY;
				console.log(x,y);
			}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.btn {
		width: 400px;
		height: 60px;
		display: flex;
		justify-content: space-between;
	}
	span {
		display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 2;
    line-height: 40px;
    background:#ccc;
    cursor: pointer;
	}
	a {
		display: block;
		width: 70%;
	}
	p {
		width: 100%;
		border: 1px solid #ccc;
	}
	.compl {
		display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 2;
    line-height: 40px;
    cursor: pointer; 
	}
	.off {
		background:#ccc;
	}
	.on {
		background: #fc0;
	}
</style>