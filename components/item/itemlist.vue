<template>
    <el-row class="item-cat">
            <el-col :span="4">
                <img class="side_left_img" :src="side_img" alt="img">
            </el-col>
            <el-col :span="20">
                <el-row class="more-row">
                    More
                </el-row>
                <el-row class="item-row">
                    <el-col v-for="i in 8" :key="i" class="item">
                         <img style="width:100%;height:175px;margin-bottom:10px" src="~static/images/item1.jpg" alt="img">
                      <p style="margin:0px">BDS17{{i}}</p>
                      <h5 style="color:#FF0000;margin-top:10px">Ks 126500</h5>
                    </el-col>
                    
                </el-row>
            </el-col>
        </el-row>
</template>
<style scoped>
.item{
   border-right:1px solid #F3F3F3;
   border-bottom:1px solid #F3F3F3;
   padding:20px;
   width:25%;
   height:50%;
}
.item-row{
     height: 570px;
}
.more-row{
    margin:10px 20px 10px 20px;
    text-align:right;
    height: 10px;
}
.side_left_img {
    width:100%;
    height: 600px;
}
.item-cat{
    margin-top:50px ;
    background: #fff;
    height:600px ;
}
</style>
<script>
export default {
    // components:{
    //     productpreview
    // },
    props:{
      side_img:{
        type: String,
        default: false
      }
    }
}
</script>