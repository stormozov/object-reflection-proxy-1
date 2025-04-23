import { checkEmptyKeys } from '../validators/object-validator';

/**
 * Сбор ключей объекта через for...in
 * @returns {Set} - Коллекция перечисляемых свойств
 */
export const collectObjectKeys = (obj) => {
  const keys = new Set();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.add(key);
    }
  }

  return checkEmptyKeys(keys);
};
