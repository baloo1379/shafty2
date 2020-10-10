<template>
  <a class="media has-text-black" :href="href">
    <figure class="media-left">
      <p class="image is-96x96">
        <img :src="album.img" >
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ album.name }}</strong>
          <br>
          {{ album.artist }}
          <br>
          <small>{{ new Date(album.release_date).getFullYear() }}</small>
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AlbumRow',
  props: {
    album: Object
  },
  computed: {
    href: function () {
      return '/album/' + this.album.id
    }
  }
}
</script>

<style>
  .media {
    margin-bottom: .75rem;
  }
  .media+.media {
    border: none;
    margin: 0 0 .75rem 0;
    padding: 0;
  }
  .media:hover {
    background: rgb(240,240,240);
  }
</style>
