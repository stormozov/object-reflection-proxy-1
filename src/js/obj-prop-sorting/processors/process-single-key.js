/** 
 * Обработка объекта с одним ключом.
 * @returns {Array} - Отсортированный массив из одного объекта.
 */
export const processSingleKey = (keys, obj) => {
  const [key] = keys;
  return [{ key, value: obj[key] }];
};
