import Vue from 'vue';
import axios from 'axios';

import Form from '../../vueComponents/core/Form';

//linking css
require('../css/ie10-viewport-bug-workaround.css');
require('../css/sticky-footer-navbar.css');
require('../less/main.less');
require('../less/main.less');

//linking js
require('./ie10-viewport-bug-workaround.js');


window.axios = axios;
window.Form = Form;


new Vue({
    el: '#app',
    data: {
        form: new Form({
            name: '',
            description: '',
        })
    },
    methods: {
        onSubmit(event) {
            this.form.submit('post', 'http://learning.local/projects')
                .then(alert('All Ok!'));
        }
    }
});