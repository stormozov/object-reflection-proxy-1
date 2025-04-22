import { objectToSortedArray } from '../obj-prop-sorting';

describe('objectToSortedArray', () => {
  it('Должен вернуть отсортир. массив, с учетом указ. порядка', () => {
    const sortingOrder = ['name', 'level'];
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };
    const expected = [
      // порядок взят из массива с ключами
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      // порядок по алфавиту 
      // (т.к. в массиве с ключами нет значения "attack", "defense", "health")
      { key: 'attack', value: 80 },
      { key: 'defense', value: 40 },
      { key: 'health', value: 10 }
    ]

    const received = objectToSortedArray(obj, sortingOrder);

    expect(received).toEqual(expected);
  });

  it('Должен вернуть отсортир. массив, с учетом указ. порядка, кроме несуществующих ключей', () => {
    const sortingOrder = ['name', 'level', 'lucky'];
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };
    const expected = [
      // порядок взят из массива с ключами
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      // порядок по алфавиту 
      // (т.к. в массиве с ключами нет значения "attack", "defense", "health")
      { key: 'attack', value: 80 },
      { key: 'defense', value: 40 },
      { key: 'health', value: 10 }
    ]

    const received = objectToSortedArray(obj, sortingOrder);

    expect(received).toEqual(expected);
  });

  it('Должен вернуть отсортир. массив, если в sortingOrder указаны некоторые ключи', () => {
    const sortingOrder = ['name']; // Указываем только один ключ
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defense', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 }
    ];

    const received = objectToSortedArray(obj, sortingOrder);

    expect(received).toEqual(expected);
  });

  it('Должен вернуть отсортир. массив, с учетом порядка по алфавиту и без указ. порядка', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };
    const expected = [
      // порядок по алфавиту
      { key: 'attack', value: 80 },
      { key: 'defense', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]

    const received = objectToSortedArray(obj);

    expect(received).toEqual(expected);
  });

  it('Должен вернуть отсортир. массив, если передать вторым аргументом пустой массив', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };
    const expected = [
      // порядок по алфавиту
      { key: 'attack', value: 80 },
      { key: 'defense', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]

    const received = objectToSortedArray(obj, []);  

    expect(received).toEqual(expected);
  });

  it('Должен вернуть отсортир. массив, если передать вторым аргументом не массив', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defense: 40 };
    const expected = [
      // порядок по алфавиту
      { key: 'attack', value: 80 },
      { key: 'defense', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]

    const received = objectToSortedArray(obj, '');

    expect(received).toEqual(expected);
  });

  it('Должен вернуть массив из одного объекта, если в переданном объекте один ключ', () => {
    const obj = { name: 'мечник' };
    const received = objectToSortedArray(obj);
    const expected = [{ key: 'name', value: 'мечник' }];

    expect(received).toEqual(expected);
  });

  it('Должен вернуть ошибку, если объект не содержит собственных перечисляемых свойств 1', () => {
    function Parent() {
      this.inheritedProp = 'inherited';
    }
    
    Parent.prototype.inheritedMethod = function () { };

    const obj = Object.create(Parent.prototype);

    expect(() => objectToSortedArray(obj)).toThrow(Error);
  });

  it('Должен вернуть ошибку, если первый аргумент не объект', () => {
    expect(() => objectToSortedArray('мечник')).toThrow(TypeError);
  });

  it('Должен вернуть ошибку, если объект не содержит собственных перечисляемых свойств', () => {
    expect(() => objectToSortedArray({})).toThrow(Error);
  });

  it('Должен вернуть ошибку, если первый аргумент null', () => {
    expect(() => objectToSortedArray(null)).toThrow(TypeError);
  });

  it('Должен вернуть ошибку, если первый аргумент массив', () => {
    expect(() => objectToSortedArray([])).toThrow(TypeError);
  });
});
