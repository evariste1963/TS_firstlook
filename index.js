async function hello() {
    return 'world';
}
let lucky = 20; //implicit type
let luckier = 23; // opting out ot type
luckier = 'some text';
let luckiest; // inferred as any type
let luckinow; //explicit type 
luckinow = 20;
let font;
font = 'italic';
const person = {
    first: 'jeff',
    last: 'Delany'
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
function pow(x, y) {
    return Math.pow(x, y);
}
//pow(23,'foo')
function pow1(x, y) {
    return Math.pow(x, y);
}
pow1(23, 3);
// explicitly typing the return value as string
function pow2(x, y) {
    return Math.pow(x, y).toString();
}
pow2(23, 3);
//for functions that don't return anything ie event listeners etc
function pow3(x, y) {
    Math.pow(x, y);
}
pow3(23, 3);
//strong typing an array
const arr = [];
arr.push(1);
arr.push('23');
arr.push(false);
//the ? are just because the array is initial declared as empty -- can also be used elsewhere i.e for optional function args
const arr2 = [];
arr2.push(1);
arr2.push('23');
arr2.push(false);
//generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x = (Observable);
let y = (Observable);
let z = new Observable(23);
export {};
