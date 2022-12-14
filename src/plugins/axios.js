import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-75acf-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-75acf-default-rtdb.firebaseio.com/'
        })


        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        })

        //,
        // Vue.prototype.$teste = axios.create({
        //     baseURL: 'https://curso-vue-75acf-default-rtdb.firebaseio.com/'
        // })
    }
})