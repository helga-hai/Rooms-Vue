//здесь все генерации темплейта, 
//просто отрисовывает сущность
//import room from './generator';

console.log('render.js')
const _paths = {
    patternContainer: {
        room: '.rooms__patterns',
        record: '.records__patterns'
    },
    pattern: {
        room: '#room',
        record: '#record'
    }
};

function renderRooms(list, template) {

    const pattern = document.querySelector(`${_paths.patternContainer.room} ${_paths.pattern.room}`);

    list.forEach(item => {

        const room = pattern.cloneNode(true);
        room.classList.remove('pattern');

        const title = room.querySelector('.room__title'),
            img = room.querySelector('.room__img img'),
            descr = room.querySelector('.room__description'),
            area = room.querySelector('.room__area'),
            levels = room.querySelector('.room__levels'),
            floor = room.querySelector('.room__floor'),
            type = room.querySelector('.room__type')


        title.innerHTML = `Room ${item.number}`;
        img.src = item.src;
        descr.innerHTML = item.description();
        area.innerHTML = `<strong>area:</strong> ${item.area} m<sup>2</sup>`;
        levels.innerHTML = `<strong>levels:</strong> ${item.levels}`;
        const fl = item.floor();
        (fl === 'none') ?
        floor.style.display = 'none':
            floor.innerHTML = `<strong>floor:</strong> ${fl}`;


        if (item.repair) type.classList.add('repair-class')
        if (item.type == 'office') {
            type.classList.add('office-class')
        }
        type.innerHTML = item.type

        //button.dataset.id = item.id;
        //button.dataset.title = item.title;

        room.removeAttribute('id');
        template.appendChild(room);
    });
}

export default {
    renderRooms
};