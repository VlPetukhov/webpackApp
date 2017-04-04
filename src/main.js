import Vue from 'vue';
import axios from 'axios';

//linking less
// require('./less/main.less');

//linking js
require('./js/ie10-viewport-bug-workaround.js');

window.axios = axios;

import App from "./vueComponents/App.vue";
import Store from './vueStore';

new Vue({
    el: '#app',
    Store,
    data: {

    },
    methods: {

    },
    created() {
        window.Vue = this;
    },
    mounted() {
        let shader = $('#loading-shader');
        shader.fadeOut('slow', function(){
            shader.detach();
        });
    },
    render: h => h(App)
});