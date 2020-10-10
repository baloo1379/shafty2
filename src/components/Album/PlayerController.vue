<template>
  <button class="button is-small is-rounded" @click="buttonHandler">
    <span class="icon">
      <i class="fas fa-play" ref="icon"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'PlayerController',
  props: ['url'],
  methods: {
    buttonHandler: async function() {
      await this.$store.dispatch('toggle_preview', this.url)
      this.toggleIcon()
    },
    toggleIcon() {
      if (this.$store.state.preview_status === 'pause') {
        this.pauseIcon()
      } else {
        this.playIcon()
      }
    },
    pauseIcon: function() {
      this.$refs.icon.classList.remove('fa-pause')
      this.$refs.icon.classList.add('fa-play')
    },
    playIcon() {
      this.$refs.icon.classList.remove('fa-play')
      this.$refs.icon.classList.add('fa-pause')
    }
  },
  created: function() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'player_play') {
        this.pauseIcon()
      }
      if (mutation.type === 'player_stop') {
        this.pauseIcon()
      }
    })
  }
}
</script>

<style scoped>
.button.is-rounded {
  width: 30px;
  height: 30px;
}
</style>
