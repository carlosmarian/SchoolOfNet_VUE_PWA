// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

// Initialize Firebase
let config = {
  apiKey: "AIzaSyADINCqKIm2FwtQFR-4-NoM18UDgxOh6sU",
  authDomain: "mypush-f0be2.firebaseapp.com",
  databaseURL: "https://mypush-f0be2.firebaseio.com",
  projectId: "mypush-f0be2",
  storageBucket: "mypush-f0be2.appspot.com",
  messagingSenderId: "435178527369"
};
firebase.initializeApp(config);

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
