<template>
<main class="main">
    <div class="container">
        <div class="main-cars">
            <div class="main-cars-item" v-for="car in cars" :key="car.id">
                <img :src="car.img" alt="">
                <router-link :to="/cars/ + car.id">
                    {{car.title}}
                </router-link>
                <p> {{ car.text }} </p>
            </div>
        </div>
    </div>
</main>
</template>
<script>
import db from '@/db'
export default {
    data() {
        return {
            cars: db
        }
    },
}
</script>
<style lang="scss">
    
</style>