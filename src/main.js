import Vue from 'vue';
import axios from 'axios';

//linking less
// require('./less/main.less');

//linking js
require('./js/ie10-viewport-bug-workaround.js');

window.axios = axios;

import App from "./vueComponents/App.vue";

new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    created() {
        window.Vue = this;
    },
    mounted() {
        $('div.loading-shader').fadeOut('slow', function(){
            $('div.loading-shader').detach();
        });
    },
    render: h => h(App)
});