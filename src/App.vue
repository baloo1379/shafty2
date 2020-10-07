<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item">
        Shafty
      </p>
      <a class="navbar-item" @click="logout" v-show="this.$store.getters.isLoggedIn">
        Logout
      </a>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import axios from 'axios'

export default {
  created: function () {
    const me = this
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.request.status === 401) {
          me.$store.dispatch('logout')
            .then((result) => {
              me.$router.push('/')
            })
        }
        throw err
      })
    })
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
        .then((result) => {
          this.$router.push('/')
        })
    }
  }
}
</script>
