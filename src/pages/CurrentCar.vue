<template>
    <main class="main">
        <div class="container">
            <div class="main-item">
                <img :src="getCar.img" alt="">
                <h2>{{getCar.title}}</h2>
                <p>{{getCar.text}}</p>
            </div>
        </div>
    </main>
</template>
<script>
import db from '@/db'
export default {
    data() {
        return {
            cars: db,
            currentId: null
        }
    },
    created(){
        this.currentId = this.$route.params.id
    },
    computed: {
        getCar(){
            return this.cars.find(car => car.id == this.currentId)
        }
    },
}
</script>
<style lang="scss">
    
</style>