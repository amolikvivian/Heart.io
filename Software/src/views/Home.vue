<template>
  <div class="home">
    <button v-if="loginCheck == false" class="btn" @click="googleSignIn">
      <span class="btn-dashboard">
        <i class="material-icons icon-dashboard">email</i>
        Sign in with Google
      </span>
    </button>
    <div v-if="loginCheck == true">
      <router-link to="/dashboard">
        <button class="btn">
          <span class="btn-dashboard">
            <i class="material-icons icon-dashboard">dvr</i>
            Dashboard
          </span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      loginCheck: false,
    };
  },
  methods: {
    googleSignIn: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          alert("Verified. Head to Dashboard");
          this.loginCheck = true;
        });
    },
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
.btn-dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.icon-dashboard {
  padding-right: 8px;
}
</style>