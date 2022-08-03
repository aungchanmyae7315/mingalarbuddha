<template>
  <div>
    <div class="main_container">
      <WebHeader></WebHeader>
        <nuxt />
      <WebFooter></WebFooter>
    </div>
    
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import WebHeader from "~/components/Header/WebHeader.vue";
import WebFooter from "~/components/Footer/WebFooter.vue";


export default {
  components: { 
    WebHeader,
    WebFooter
   },


  mounted() {},
  data() {

  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


</style>


