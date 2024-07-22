<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import SiteHeader from './components/SiteHeader.vue';
import FirstArticle from './views/FirstArticle.vue';
</script>

<template>
    <!--     <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
 -->
    <SiteHeader />
    <FirstArticle />
</template>