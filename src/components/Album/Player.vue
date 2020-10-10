<template>
<teleport to="body">
  <audio ref="audio" :src="src" @ended="stop">
  </audio>
</teleport>
</template>

<script>
export default {
  name: 'Player',
  data() {
    return {
      src: ''
    }
  },
  created: function() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'player_play') {
        this.src = state.current_preview
        setTimeout(_ => {
          this.$refs.audio.play()
        }, 0)
      }
      if (mutation.type === 'player_pause') {
        this.$refs.audio.pause()
        this.$refs.audio.currentTime = 0
      }
    })
  },
  mounted: function() {
    this.$refs.audio.volume = 0.4
  },
  methods: {
    stop: function() {
      this.$refs.audio.pause()
      this.$refs.audio.currentTime = 0
      this.$store.commit('player_stop')
    }
  }
}
</script>
