import { objectToSortedArray } from './obj-prop-sorting';

const sortingOrder = ['name', 'level'];
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };

const result = objectToSortedArray(obj, sortingOrder);
console.log(result);
