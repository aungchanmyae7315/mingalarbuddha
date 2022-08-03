import Vue from 'vue';
import Vuex from 'vuex';
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {

    });


    Vue.config.warnHandler = function (msg, vm, trace) {


    }
    Vue.config.errorHandler = (err, vm, info) => {

    };
}