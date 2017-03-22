import Vue from 'vue';
import axios from 'axios';

//linking css
require('./css/ie10-viewport-bug-workaround.css');
require('./css/sticky-footer-navbar.css');
require('./less/main.less');

//linking js
require('./js/ie10-viewport-bug-workaround.js');


window.axios = axios;

new Vue({
    el: '#app',
    data: {
        name: '',
        description: ''
    },
    methods: {
        onSubmit(event) {
            alert('cool!');
        }
    }
});