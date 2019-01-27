<template>
    <div class="box-template">
        <ul>
            <li><router-link :to="{name:'Home'}">Home</router-link></li>
            <li><router-link :to="{name:'About'}">About</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
         
    }
 
</script>