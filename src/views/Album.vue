<template>
  <div>Album</div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function() {
    const url = new URL('/v1/search', 'https://api.spotify.com')
    url.searchParams.append('q', 'Taco')
    url.searchParams.append('type', 'album')
    axios.get(url.toString())
  }
}
</script>

<style>

</style>
