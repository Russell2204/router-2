<template>
  <Header :links="links" />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header },
  data() {
    return {
        links: [
            {title: 'Home', url: '/'},
            {title: 'About', url: '/about'},
            {title: 'Cars', url: '/cars'},
        ]
    }
},
}
</script>

<style>

</style>