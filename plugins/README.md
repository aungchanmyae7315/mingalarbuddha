# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).



   <!-- <el-form-item -->
              
                prop="password"
                :rules="[
                { required: true, message: 'password is required'},
                { type: 'number', message: 'password must be a number'}
                ]"
            >  
                <el-input type="password" placeholder="Password" prefix-icon="el-icon-lock" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
               
            </el-form-item>