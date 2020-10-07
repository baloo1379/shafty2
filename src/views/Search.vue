<template>
  <section class="section">
    <SearchInput @query="requestAlbums" @empty-query="clearSearchResults" />
    <AlbumRow v-for="album in albums" :key="album.id" class="mb-3" :album="album" />
  </section>
</template>

<script>
import axios from 'axios'
import SearchInput from '../components/SearchInput'
import AlbumRow from '../components/AlbumRow'

export default {
  name: 'Search',
  components: {
    SearchInput,
    AlbumRow
  },
  data() {
    return {
      albums: []
    }
  },
  methods: {
    clearSearchResults: function() {
      this.albums = []
    },
    requestAlbums: async function({ query }) {
      this.albums = []
      const url = new URL('/v1/search', 'https://api.spotify.com')
      url.searchParams.append('q', query)
      url.searchParams.append('type', 'album')
      // eslint-disable-next-line no-unused-vars
      const response = await axios.get(url.toString())
      for (const item of response.data.albums.items) {
        const album = {}
        album.id = item.id
        album.name = item.name
        album.artist = item.artists[0].name
        album.img = item.images[1].url
        album.release_date = item.release_date
        this.albums.push(album)
      }
    }
  }
}
</script>

<style>

</style>
