import Vue from 'vue';
import axios from 'axios';

//linking css
require('./css/ie10-viewport-bug-workaround.css');
require('./css/sticky-footer-navbar.css');
require('./less/main.less');

//linking js
require('./js/ie10-viewport-bug-workaround.js');


window.axios = axios;

class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (this.errors[field]) {
            delete(this.errors[field]);

            return;
        }

        this.errors = {};
    }

    has (field) {
        return !!this.errors[field];
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor (data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data () {
        let data = {};

        for (let field in this.originalData) {
            data[field] = this[field];
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    submit (requestType, url) {

        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });

        });

    }

    onSuccess (data) {
        console.log(data.message);
        this.reset();
    }

    onFail (errors) {
        this.errors.record(errors.response.data);
    }
}


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
            this.form.submit('post', 'http://learning.local/projects');
        }
    }
});