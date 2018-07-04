const flatten = require('./index');

const data:any = {
    a: {
        b: [1, '2', 0.3, null, undefined, 0],
        f: '',
        g: null,
        h: undefined,
        i: 0
    },
    c: [{
        d: 'ddd'
    }, {
        e: 'eee'
    }],
    j: {
        [''] : 'empty',
        [2] : 'number'
    }
};

const result = flatten(data);

console.log(result);