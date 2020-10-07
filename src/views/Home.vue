<template>
  <section class="hero is-bold is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          To use this app you need to connect it with Spotify.
        </h1>
        <h2 class="subtitle">
          <a :href="url" class="button is-link is-light">
            Connect with Spotify
          </a>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    url() {
      return this.$store.getters.authUrl
    }
  }
}
</script>
