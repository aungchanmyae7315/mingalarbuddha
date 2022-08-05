<template>
    <el-main class="page-bg">
        <div class="container">
        <ItemList v-for="i in cat" :key="i" :side_img="i"></ItemList>
        </div>
    </el-main>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import ItemList from "~/components/item/itemlist.vue";


export default {
  components: { 
    ItemList
   },


  mounted() {},
  data() {
   return{
    cat:["http://mingalarbuddha.com/upload/image/202007131428401222.jpg",
    "http://mingalarbuddha.com/upload/image/202007071838497251.jpg",
    "http://mingalarbuddha.com/upload/image/202007071820454627.jpg",
    "~static/images/side_img1.jpg"]
   } 
  }
}
</script>
<style scoped>

.page-bg.el-main{
    padding:0px
}
.page-bg{
    background-color: #F3F3F3;
    min-height: 50vh;
}
</style>