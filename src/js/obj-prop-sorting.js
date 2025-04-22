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
  /**
   * Алгоритм сортировки и формирования массива из объекта.
   * 
   * 1. Валидация входного объекта
   * 2. Сбор ключей через for...in
   * 3. Оптимизация для объектов с одним ключом
   * 4. Обработка порядка сортировки или сортировка по алфавиту
   */

  // 1. Валидация объекта
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new TypeError('Первый аргумент должен быть непустым объектом');
  }

  // 2. Сбор ключей
  const keys = new Set();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.add(key);
    }
  }

  if (keys.size === 0) {
    throw new Error('Объект не содержит собственных перечисляемых свойств');
  }

  // 3. Оптимизация для одного ключа
  if (keys.size === 1) {
    const [key] = keys;
    return [{ key, value: obj[key] }];
  }

  // 4. Обработка порядка сортировки
  const validOrder = Array.isArray(sortingOrder) ? sortingOrder : [];

  // 4a. Если порядок не задан - сортировка по алфавиту
  if (validOrder.length === 0) {
    return [...keys]
      .sort((a, b) => a.localeCompare(b))
      .map((key) => ({ key, value: obj[key] }));
  }

  // 4b. Обработка указанного порядка
  const result = [];
  const remainingKeys = new Set(keys);

  // Добавляем элементы по порядку
  for (const key of validOrder) {
    if (remainingKeys.has(key)) {
      result.push({ key, value: obj[key] });
      remainingKeys.delete(key);
    }
  }

  // Добавляем оставшиеся ключи по алфавиту
  const sortedRemaining = [...remainingKeys].sort((a, b) => a.localeCompare(b));
  result.push(...sortedRemaining.map((key) => ({ key, value: obj[key] })));

  return result;
};
