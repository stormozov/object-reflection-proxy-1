/** 
 * Сортировка по алфавиту.
 * @returns {Array} Отсортированный по алфавиту массив из объектов.
 */
export const sortAlphabetically = (keys, obj) => {
  const sortingResult = [...keys]
    .sort((a, b) => a.localeCompare(b))
    .map((key) => ({ key, value: obj[key] }));

  return sortingResult;
}
