<template>
  <tr>
    <td><strong>{{ track.name }}</strong><span class="is-size-7" :key="artist.id" v-for="(artist, index) in trackArtists">
        <span v-if="index === 0"> - </span><span v-if="index !== 0">, </span><span>{{artist.name}}</span>
      </span></td>
    <td>{{ duration }}</td>
    <td><PlayerController :url="track.preview_url"/></td>
  </tr>
</template>

<script>
import { millisToMinutesAndSeconds } from '@/classes/Utils'
import PlayerController from '@/components/Album/PlayerController'

export default {
  name: 'Track',
  components: {
    PlayerController
  },
  props: {
    track: Object,
    albumArtists: Array
  },
  computed: {
    duration: function() {
      return millisToMinutesAndSeconds(this.track.duration_ms)
    },
    trackArtists: function() {
      return this.track.artists.filter(artist => {
        return !this.albumArtists.find(rm => (rm.name === artist.name))
      })
    }
  }
}
</script>

<style>

</style>
