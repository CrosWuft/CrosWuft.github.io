<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import SiteHeader from './components/SiteHeader.vue';
import FirstArticle from './views/FirstArticle.vue';
</script>

<template>
    <div class="main">
        <div class="main-content">
            <SiteHeader />
            <FirstArticle />
        </div>
    </div>
</template>