/** 
 * Сортировка оставшихся ключей.
 * @returns {Array} Отсортированный массив из объектов.
 */
export const sortRemainingKeys = (remainingKeys, obj) => {
  const sortedKeys = [...remainingKeys]
    .sort((a, b) => a.localeCompare(b))
    .map((key) => ({ key, value: obj[key] }));

  return sortedKeys;
}
