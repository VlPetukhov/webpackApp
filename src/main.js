import Vue from 'vue';
import axios from 'axios';

//linking css
require('./assets/css/ie10-viewport-bug-workaround.css');
require('./assets/css/sticky-footer-navbar.css');
require('./assets/less/main.less');
require('./assets/less/main.less');

//linking js
require('./assets/js/ie10-viewport-bug-workaround.js');

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