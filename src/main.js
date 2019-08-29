// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Axios from 'axios'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//将axios挂载到vue对象上.prototype(原型)
Vue.prototype.$axios = Axios
Axios.default.baseURL = 'http://localhost:8080/api/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})