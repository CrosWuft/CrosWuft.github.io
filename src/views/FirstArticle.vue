<script setup lang="ts">
import ServerActivties from '@/components/ServerActivties.vue';
</script>
<template>
    <div class="post-container">
        <article class="post">
            <h2 class="post-title">欢迎您的到来!</h2>
            <div class="post-info">
                <span>2022-08-24</span>
                <span>1 min read</span>
            </div>

            <div class="post-abstract">
            </div>
            <p>
                欢迎您来到本站,很高兴遇见你!本站由CrosWuft创建,目前是DT服务器的官网,以后或许会推出新功能，敬请期待！
                <br><br>你可以在这探索本站的一些功能,如:你可以通过点击上面的'地铁村庄'进入地铁村庄的官方主页，
                你也可以通过点击上面的'首页'进入本网站的首页,你还可以点击'关于'了解本站及站长的一些信息............
                更多功能等你探索!!😀<br>
            </p>
        </article>
    </div>
    <ServerActivties />
</template>