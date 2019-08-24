//точка входа, контроллер, отлавливат события, навешивает обработчики
//window.onload должен быть здесь, onEvents, запускает рендеры.
//обращение к элементам и получение данных
//контейнер куда вы будете рендерить вы здесь получаете. 
//и говорите я ожидаю что то отсюда - и вам возвращается уже готовый темплейт
//Если нужно передать что-то (списки, контейнеры) в модуль - передается параметрами, аргументами
console.log('script.js')
import './../scss/main.scss';
import itemRoom from './generator.js';
import Render from './render.js';

// Vue.component('room-item', {
//     template: `
//     <div class="room">
//         <div class="room__img"><img src="./img/room.png" alt=""></div>
//         <div class="room__info">
//             <div class="room__title">Room {{item.number}}</div>
//             <div class="room__description">{{item.description()}}</div>
//             <div class="room__area"><strong>area:</strong> {{item.area}} m<sup>2</sup></div>
//             <div class="room__levels"><strong>levels:</strong> {{item.levels}}</div>
//             <div class="room__floor" ><strong>floor:</strong> {{item.floor()}}</div>
//             <div class="room__type" :class="(item.type == 'office') ? 'office-class' : ''">item.type</div>
//         </div>
//     </div>`
// });

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        listRooms: [new itemRoom, new itemRoom, new itemRoom, new itemRoom]
    },
    computed: {
        // getFloor() {
        //     const fl = this.item.floor()
        //     return fl
        // }
    },
    methods: {
        // getData(){
        //     fetch('./js/app.js')
        //     .then(res => res)
        // }
    }
})
window.onload = function() {

    const listRooms = [new itemRoom, new itemRoom, new itemRoom, new itemRoom];

    const roomsWrapper = document.querySelector('#rooms__wrapper');

    Render.renderRooms(listRooms, roomsWrapper);



}