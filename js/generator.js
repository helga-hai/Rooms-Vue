console.log('generator.js')

export default function Room() {

    const src = './img/room.png';
    const number = Math.ceil(Math.random() * 999);

    const _firstNumber = number.toString().split('')[0]

    const levels = (_firstNumber != 9) ? Math.ceil(Math.random() * 2) : 1;
    const area = Math.ceil(Math.random() * 100);
    const repair = [true, false][Math.floor(Math.random() * 2)];
    const type = ['office', 'utility room'][Math.floor(Math.random() * 2)]


    const floor = function() {
        let val;

        (number.toString().split('').length == 3) ?
        val = _firstNumber:
            val = 0;

        if (levels !== 1)
            val = '' + val + '–' + ++val;

        return [val, 'none'][Math.floor(Math.random() * 2)]

    }

    const description = function() {
        let val = 'Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'.split(' ');
        val.length = Math.floor(Math.random() * 18) + 3
        return val.join(' ')
    }
    return Object.freeze({
        src,
        number,
        description,
        area,
        levels,
        floor,
        repair,
        type
    });
}