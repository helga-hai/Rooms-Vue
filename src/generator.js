
export default function Room() {

    const src = 'http://hai-nyzhnyk.in.ua/test/room.png';
    const number = Math.ceil(Math.random() * 999);

    const _firstNumber = number.toString().split('')[0]

    const levels = [(_firstNumber != 9) ? Math.ceil(Math.random() * 2) : 1, ''][Math.floor(Math.random() * 2)];
    const area = Math.ceil(Math.random() * 100);
    const repair = [true, false][Math.floor(Math.random() * 2)];
    const type = ['office', 'utility room'][Math.floor(Math.random() * 2)]

    let roomFloor;

    (number.toString().split('').length == 3) ?
        roomFloor = _firstNumber:
            roomFloor = 0;

    if (levels !== 1)
        roomFloor = '' + roomFloor + '–' + ++roomFloor;

    roomFloor = [roomFloor, 'none'][Math.floor(Math.random() * 2)]

    function _mathFloor(min, max){
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }

    const description = 'Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'.split(' ').slice(0, _mathFloor(3, 20)).join(' ')

    return Object.freeze({
        src,
        number,
        description,
        area,
        levels,
        roomFloor,
        repair,
        type
    });
}