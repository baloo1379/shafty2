<template>
  <article class="media">
    <div class="media-left">
      <figure class="image is-196x196">
        <img :src="album.images[1].url" alt="album cover">
      </figure>
    </div>
    <div class="media-content">
      <p class="is-size-6 is-uppercase type">{{album.album_type}}</p>
      <h2 class="title"><strong>{{album.name}}</strong></h2>
      <p class="subtitle">
        <span :key="artist.id" v-for="(artist, index) in album.artists">
          <span v-if="index !== 0">, </span><span>{{artist.name}}</span>
        </span>
      </p>
      <p>{{ new Date(album.release_date).getFullYear() }}</p>
      <p><strong>{{album.total_tracks}}</strong> track{{ (album.total_tracks > 1) ? 's' : '' }}</p>
      <p><Popularity :value="album.popularity" /></p>
    </div>
    <div class="media-right">
      <a target="_blank" :href="album.external_urls.spotify" class="button is-success is-rounded is-small">Open in Spotify</a>
    </div>
  </article>
</template>

<script>
import Popularity from '@/components/Album/Popularity'

export default {
  name: 'Description',
  components: {
    Popularity
  },
  props: {
    album: Object
  }
}
</script>

<style scoped>
.is-196x196 {
  width: 196px;
  height: 196px;
}
.type {
  transform: scale(1, .92);
}
</style>
