<template>
  <div class="bg-blue-300 h-screen">
    <div class="w-full">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitTemplate',

  created () {
    this.$store.dispatch("onInit")
  }
}
</script>
