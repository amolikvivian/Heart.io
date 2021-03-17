import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'animate.css'

var firebaseConfig = {
    apiKey: "AIzaSyBQmkOMaP4JbEXv6UH3LeGWXsGBdk04rS0",
    authDomain: "esp8266-firebase-10f01.firebaseapp.com",
    databaseURL: "https://esp8266-firebase-10f01-default-rtdb.firebaseio.com",
    projectId: "esp8266-firebase-10f01",
    storageBucket: "esp8266-firebase-10f01.appspot.com",
    messagingSenderId: "715077083194",
    appId: "1:715077083194:web:28815e18e656b39a795503"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  createApp(App).use(router).mount('#app')