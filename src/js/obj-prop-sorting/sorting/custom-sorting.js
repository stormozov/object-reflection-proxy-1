import { processSortingOrder } from '../processors/process-sorting-order';
import { sortRemainingKeys } from './sort-remaining-keys';

/** 
 * Применение пользовательского порядка сортировки.
 * @returns {Array} Отсортированный массив из объектов.
 */
export const applyCustomSorting = (keys, obj, order) => {
  const result = [];
  const remainingKeys = new Set(keys);

  // Добавляем элементы по заданному порядку
  processSortingOrder(order, remainingKeys, result, obj);

  // Добавляем оставшиеся элементы
  result.push(...sortRemainingKeys(remainingKeys, obj));

  return result;
};
