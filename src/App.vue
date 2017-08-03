<template>
  <div id="app">
    <v-foot v-if="footShow">
      <router-view></router-view>
    </v-foot>
    <router-view v-else></router-view>
  </div>
</template>

<script>
  import Foot from '@/components/public/Foot'
  export default {
    components: {
      'v-foot': Foot
    },
    /*data(){
      return {
        footShow: true
      }
    },*/
    computed: {
      footShow(){
        if (this.$route.path.indexOf('specialDetail') > -1 || this.$route.path.indexOf('specialSearch') > -1) {
          return false;
        } else {
          return true;
        }
      }
    },
    name: 'app',
    /*watch: {
      $route (val, oldVal) {
        console.log(val.path.indexOf('specialSearch') > -1);
        console.log(111);
        if (val.path.indexOf('specialDetail') > -1 || val.path.indexOf('specialSearch') > -1) {
          this.footShow = false;
        }
      }
    },*/
  }
</script>

<style>

</style>
