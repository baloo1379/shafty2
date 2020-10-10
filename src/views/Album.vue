<template>
  <section v-if="status" class="section">
    <div class="container box">
      <Description  :album="album" />
    </div>
    <div class="container box">
      <table class="table is-fullwidth is-hoverable">
        <tbody>
          <Track  v-for="track in album.tracks.items" :key="track.id" :track="track" :albumArtists="album.artists"/>
        </tbody>
      </table>
    </div>
  </section>
  <Player />
</template>

<script>
import axios from 'axios'
import Description from '@/components/Album/Description'
import Track from '@/components/Album/Track'
import Player from '@/components/Album/Player'

export default {
  name: 'Album',
  components: {
    Description,
    Track,
    Player
  },
  data() {
    return {
      status: false,
      album: null
    }
  },
  created: async function() {
    const url = new URL(`/v1/albums/${this.$route.params.id}`, 'https://api.spotify.com/')
    const response = await axios.get(url.toString())
    this.album = response.data
    this.status = true
  }
}
</script>

<style>
</style>
