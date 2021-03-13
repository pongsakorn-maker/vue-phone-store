import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpxnJC6ZN1jUc8cYL1yL4h1hdOiosdt04",
  authDomain: "vue-phone-store-944aa.firebaseapp.com",
  projectId: "vue-phone-store-944aa",
  storageBucket: "vue-phone-store-944aa.appspot.com",
  messagingSenderId: "147066018051",
  appId: "1:147066018051:web:f33705117a829fdf5cb136",
  measurementId: "G-7TJ3GLEHXQ"
};
firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
