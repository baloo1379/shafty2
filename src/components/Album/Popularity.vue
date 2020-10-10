<template>
  <div class="popularity has-text-grey-darker" title="Popularity">
    <span v-for="rate in rating" :key="rate">|</span>
    <span v-for="rate in (10 - rating)" :key="rate" class="has-text-grey-lighter">|</span>
  </div>
</template>

<script>
export default {
  name: 'Popularity',
  props: ['value'],
  computed: {
    rating: function() {
      return this.value ? Math.round(this.value / 10) : 0
    }
  }
}
</script>

<style scoped>
.popularity {
  user-select: none;
  font-weight: bold;
}
</style>
