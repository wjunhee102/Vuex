<template>
  <div class="done box">
    <p>완료한 일</p>
    <template v-for="item in selectList(true)" >
      <div  
        class="btn sh bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        v-bind:key="item.idx"
        @click="stateChange(item.idx)"
        >
        {{item.label}}
        <span @click="removeList(item.idx)">제거</span>
      </div>
    </template>
   </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed : {
    ...mapGetters({
      selectList : 'selectList'
    })
  },
  methods : {
    ...mapMutations({
      stateChange : 'stateChange',
      removeList : 'removeList'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>