import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'
//import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
