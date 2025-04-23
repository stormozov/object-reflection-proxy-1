/** 
 * Валидация входного объекта.
 * @throws {TypeError} - Если проверяемое значение не является объектом.
 */
export const validateObject = (obj) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new TypeError('Должен быть передан не пустой объект');
  }
};

/**
 * Проверка на наличие перечисляемых свойств у Set-коллекции.
 * @returns {Set} - Коллекция перечисляемых свойств без изменений.
 * @throws {Error} - Если объект не содержит собственных перечисляемых свойств.
 */
export const checkEmptyKeys = (keys) => {
  if (keys.size === 0) {
    throw new Error('Object has no enumerable properties');
  }

  return keys;
};
