import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события
const app = new Vue ({
    template: '#app',
    data() {
        return{
            counter: 0
        }
    },
    methods: {
        handleClick(event){
            this.counter++;
        }
    }
});
app.$mount('#app');
