<template>
  <div>
    <a :href="url">Spotify</a>
  </div>
</template>

<script>
export default {
  name: 'Grant',
  computed: {
    url() {
      return this.$store.getters.authUrl
    }
  }
}
</script>

<style>

</style>
