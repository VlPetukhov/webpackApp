import Vue from 'vue';
import axios from 'axios';

//linking css
require('./css/ie10-viewport-bug-workaround.css');
require('./css/sticky-footer-navbar.css');
require('./less/main.less');
require('./less/main.less');

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
    render: h => h(App)
});