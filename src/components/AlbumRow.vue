<template>
  <article class="media">
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
          <small>{{ album.release_date }}</small>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AlbumRow',
  props: {
    album: Object
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
  article.media:hover {
    background: rgb(240,240,240);
  }
</style>
