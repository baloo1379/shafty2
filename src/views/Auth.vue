<template>
  <div></div>
</template>

<script>
export default {
  name: 'Auth',
  created: function() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/search')
    } else {
      if (window.location.hash !== '') {
        this.$store.dispatch('login', window.location.href)
          .then(() => this.$router.push('/search'))
          .catch(err => console.log(err))
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
