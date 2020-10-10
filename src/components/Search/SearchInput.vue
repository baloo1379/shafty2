<template>
  <div class="field has-addons">
    <div class="control has-icons-left is-expanded is-clearfix">
      <input class="input" name="query" id="query" type="search"
      v-model="query" @input='debounceInput'
      placeholder="ex. Future Nostalgia"
      >
      <span class="icon is-left">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <div class="control">
      <button class="button is-primary">Search</button>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/classes/Utils'

export default {
  name: 'SearchInput',
  data() {
    return {
      query: ''
    }
  },
  emits: ['query'],
  methods: {
    debounceInput: debounce(function () {
      if (this.query) this.$emit('query', { query: this.query })
      else this.$emit('empty-query')
    }, 500)
  }
}
</script>

<style>

</style>
