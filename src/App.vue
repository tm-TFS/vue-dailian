<template>
  <div id="app">
      <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import Foot from '@/components/public/Foot'
export default {
  components: {
    'v-foot': Foot
  },
  name: 'app'
}
</script>

<style>

</style>
