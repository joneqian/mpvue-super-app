// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.mixin({
  data () {
    return {
    }
  },
  methods: {
      getRoute () {
          return  this.$route
      },
      navigatePageTo (url) {
          this.$router.push(url)
      },
      reLaunchPageTo (url) {
          this.$router.replace(url)
      },
      setStorageSync (name, data) {
          sessionStorage.setItem(name, JSON.stringify(data))
      },
      getStorageSync (name) {
          return JSON.parse(sessionStorage.getItem(name))
      }
  },
  created () {
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})