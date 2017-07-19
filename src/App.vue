<template>
  <div id="app">
    <v-header></v-header>
      <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import Header from '@/components/public/Header'
  import Foot from '@/components/public/Foot'
export default {
  components: {
    'v-header': Header,
    'v-foot': Foot
  },
  name: 'app'
}
</script>

<style>

</style>
