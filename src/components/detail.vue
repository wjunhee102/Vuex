<template>
    <div class="detail">
        <div>
            <router-link to="/" exact>홈</router-link>
                <h1>{{Todo(id).todo}}</h1>
                <h2>{{!Todo(id).done?("해야할 일"):("완료함")}}</h2>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        id : Number,
    },
    computed : {
        ...mapGetters({
            Todo : 'detail'
        })
    }
}
</script>

<style>

</style>