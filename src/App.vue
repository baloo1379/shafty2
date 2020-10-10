<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="homeLink">
        Shafty
      </a>
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
  name: 'App',
  data() {
    return {
      homeLink: ''
    }
  },
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
    if (this.$store.getters.isLoggedIn) {
      this.homeLink = '/search'
    } else {
      this.homeLink = '/'
    }
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
