import './../scss/main.scss';
import itemRoom from './generator.js';


var app = new Vue({
    el: '#app',
    data: {
        listRooms: [new itemRoom, new itemRoom, new itemRoom, new itemRoom]
    }
})
  