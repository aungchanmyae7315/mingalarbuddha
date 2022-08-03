<template>
    <div>

   
    <div class="login_header">
        <el-row class="container">
            <el-col :span="12" style="text-align:left;">
                    ShweMyanmar Mingalar Co.,Ltd
            </el-col>
            <el-col :span="12" style="text-align: right;">
                Please Login
            </el-col>
        </el-row>
    </div>

    <div class="header_main">
        <div class="container">
        <el-row >
            <el-col :span="4" style="padding-top:5px;">
                <div class="buddha_logo">
                    <img src="~/static/images/mingalarbuddha_logo.jpg" alt="logo">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="buddha_articel_logo">
                    <img src="~/static/images/buddha_articels.jpg" alt="articels">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="search_input">
                    <el-input  placeholder="Please enter search keywords" v-model="search_input" class="input-with-select">
                        <el-button slot="append">Search</el-button>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="6" style="text-align:right;padding-top:15px;">
                <el-button class="myshopping_btn" type="primary" icon="el-icon-shopping-cart-2">My Shopping Card</el-button>
            </el-col>
            <el-col :span="2" style="text-align:right;padding-top:15px;">
                 <el-button plain>0</el-button>
            </el-col>
          
        </el-row>
     
                
        
                 <ul class="header_items_lists">
                    <li style="" class="all_products_btn"><i style="text-align:left" class="el-icon-s-fold"></i>All products</li>
                    <li class="home_btn">Home</li>
                    <li>Lighting</li>
                    <li>Home Appliance</li>
                    <li>Join in us</li>
                    <li>About us & Contact</li>
                    <li>Story of the Buddha</li>
                </ul>
              
        
              
       </div>
    </div>
    <section class="slider_bg">
          <el-row class="container ">
                    <el-col :span="4">
                         <ul class="all_products_items">
                   
                            <li>Buddha Statue </li>
                            <li>Temple Supplies</li>
                            <li>Crafts & Ornaments</li>
                            <li>Incense Appliance</li>
                            <li>AncientTempleBuildings</li>
                            <li>Temple Decoration</li>
                            <li>Book & Video</li>
                            <li>Guanyin</li>
                            <li>Hindu Series</li>
                            <li>Monk Supplies</li>
                            <li>Nepal & Tibet Design</li>
                            <li>Thailand Design</li>
                        </ul>
                    </el-col>
                    <el-col :span="16">
                         <div class="slideshow_imgs">
                           
                            <el-carousel height="366px">
                            <el-carousel-item v-for="item in 3" :key="item">
                             <div class="item">
                                    <img class="item__image" src="http://www.mingalarbuddha.com/Upload/image/202007130930031562.jpg" alt="" />
                                </div>
                               
                                <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="slider_right_img">
                            <img src="~static/images/slider_right_img.jpg" alt="img">
                        </div>
                    </el-col>
                </el-row>
            </section>
     </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import WebHeader from "~/components/Header/WebHeader.vue";

export default {
  components: { 
    WebHeader,
   },


  mounted() {},
  data() {
    
    return {
       
         search_input:'',
        
         slider:''

    }
   
  }
}
</script>

<style>
.login_header {
    background-color: #FBFBFB;
    padding:7px 0;
}
.header_main {
   
    padding:20px 0 2px 0;
    border-bottom:2px solid #F66700;
}
.header_items_lists , .all_products_items {
    padding:0;
    margin:0;
}
.header_items_lists li {
    list-style: none;
    display: inline;
    margin-right:40px;
}
.header_items_lists {
    padding-top:5px;
}
.all_products_btn {
    color:#fff;
    padding:5px 40px;
    background: #F66700;
    position: relative;
    top:1px;
}
.all_products_btn i {
    padding-right: 5px;
    color:#fff;
}
.home_btn {
    color:#fff;
    padding:5px;
    background: #F66700;
}
.all_products_items li {
    font-size:13px;
    padding:5px 10px 5px 20px;
    list-style: none;
    background-color: #6E5E56;
    border-bottom: 1px solid #b8b8b8;
     width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#F3F3F3;
    margin:0;
}
.slider_bg {
    background-color: #C0A68E;
}
.slider_right_img img {
    height: 366px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .myshopping_btn {
    background: #FF4E31;
    border:0;
  }
  .el-input-group__append {
    background: #F66700;
    color:#fff;
    border:1px solid #F66700;
  }
  .el-input-group>.el-input__inner {
    border-color:#F66700;
  }
  .search_input {
    padding-top:15px;
  }
 .el-input-group>.el-input__inner::-webkit-input-placeholder {
   color: #999999;
   font-size: 11px;
}
</style>