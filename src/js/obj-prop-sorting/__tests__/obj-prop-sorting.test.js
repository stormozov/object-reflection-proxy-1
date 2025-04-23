import { objectToSortedArray } from '../obj-prop-sorting';

describe('objectToSortedArray', () => {
  // Общие данные для тестов
  const BASE_OBJECT = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defense: 40
  };

  const ALPHABETICAL_ORDER = [
    { key: 'attack', value: 80 },
    { key: 'defense', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }
  ];

  describe('Базовые случаи сортировки', () => {
    it('Сортировка с полным порядком сортировки', () => {
      const sortingOrder = ['name', 'level'];
      const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        ...ALPHABETICAL_ORDER.filter((x) => !['name', 'level'].includes(x.key))
      ];

      expect(objectToSortedArray(BASE_OBJECT, sortingOrder)).toEqual(expected);
    });

    it('Сортировка без указания порядка (по алфавиту)', () => {
      expect(objectToSortedArray(BASE_OBJECT)).toEqual(ALPHABETICAL_ORDER);
    });

    it('Сортировка с частичным порядком', () => {
      const sortingOrder = ['name'];
      const expected = [
        { key: 'name', value: 'мечник' },
        ...ALPHABETICAL_ORDER.filter((x) => x.key !== 'name')
      ];

      expect(objectToSortedArray(BASE_OBJECT, sortingOrder)).toEqual(expected);
    });
  });

  describe('Обработка sortingOrder', () => {
    it('Игнорирование несуществующих ключей в порядке сортировки', () => {
      const sortingOrder = ['name', 'invalidKey'];
      const expected = [
        { key: 'name', value: 'мечник' },
        ...ALPHABETICAL_ORDER.filter((x) => x.key !== 'name')
      ];

      expect(objectToSortedArray(BASE_OBJECT, sortingOrder)).toEqual(expected);
    });

    it('Пустой массив порядка сортировки', () => {
      expect(objectToSortedArray(BASE_OBJECT, [])).toEqual(ALPHABETICAL_ORDER);
    });

    it('Невалидный тип порядка сортировки', () => {
      expect(objectToSortedArray(BASE_OBJECT, 'invalid')).toEqual(ALPHABETICAL_ORDER);
    });
  });

  describe('Особые случаи', () => {
    it('Объект с одним свойством', () => {
      const obj = { name: 'мечник' };
      expect(objectToSortedArray(obj)).toEqual([{ key: 'name', value: 'мечник' }]);
    });

    it('Объект с унаследованными свойствами', () => {
      function Parent() {
        this.inheritedProp = 'inherited';
      }
      Parent.prototype.inheritedMethod = function () { };
      const obj = Object.create(Parent.prototype);

      expect(() => objectToSortedArray(obj)).toThrow(Error);
    });
  });

  describe('Обработка ошибок', () => {
    it('Пустой объект', () => {
      expect(() => objectToSortedArray({})).toThrow(Error);
    });

    it('Невалидный тип первого аргумента', () => {
      const invalidInputs = [null, 'мечник', [], 42];

      invalidInputs.forEach(input => {
        expect(() => objectToSortedArray(input)).toThrow(TypeError);
      });
    });
  });
});
