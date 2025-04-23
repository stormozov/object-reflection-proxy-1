import { validateObject } from './validators/object-validator';
import { collectObjectKeys } from './processors/key-collector';
import { processSingleKey } from './processors/process-single-key';
import { processMultipleKeys } from './processors/process-multiple-keys';

/**
 * Функция, которая преобразует объект в отсортированный массив.
 * 
 * @param {Object} obj - Объект с ключами для преобразования.
 * @param {Array} sortingOrder - Массив, содержащий ключи, по которым нужно отсортировать объект.
 * 
 * @returns {Array} - Отсортированный массив из объектов.
 * 
 * @throws {TypeError} - Если первый аргумент не объект.
 * @throws {Error} - Если объект не содержит собственных перечисляемых свойств.
 */
export const objectToSortedArray = (obj, sortingOrder = []) => {
  // 1. Валидация основного объекта
  validateObject(obj);

  // 2. Сбор ключей объекта
  const keys = collectObjectKeys(obj);

  // 3. Логика обработки в зависимости от количества ключей
  return keys.size === 1
    ? processSingleKey(keys, obj)
    : processMultipleKeys(keys, obj, sortingOrder);
};
