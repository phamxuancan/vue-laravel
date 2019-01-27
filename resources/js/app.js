import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './components/App.vue';
import About from './components/About.vue';
 
 
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'app',
            component:App
        },{
            path:'/about',
            name:'about',
            component:About
        }
     
    ]
});
 
const app = new Vue({
    el:'#app',
    router:router,
    render:h=>h(App),
});
export default app;