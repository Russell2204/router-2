<template>
<header class="header">
   <nav class="header-nav">
        <div class="container">
            <a href="#" class="logo">Vue-router</a>
            <ul class="header-nav-list">
                <li v-for="link in links" :key="link.url">
                    <router-link :to="link.url">{{ link.title }}</router-link>
                </li>
            </ul>
        </div>
   </nav>
</header>
</template>
<script>
export default {
    props: ['links']
}
</script>
<style lang="scss">
    
</style>