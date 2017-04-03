import Errors from './Errors';

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
                    console.log(response);
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(response => {
                    console.log(response);
                    this.onFail(response.data);

                    reject(response.data);
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

export default Form;