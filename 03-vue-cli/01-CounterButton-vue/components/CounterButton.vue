<template><div><button type="button" @click="increment(count)" :count="count">{{ count }}</button></div></template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: 'count',
    event: 'increment'
  },
  methods: {
    increment(newValue) {
      newValue++
      this.$emit('increment', newValue)
    }
  }
};
</script>

<style></style>
