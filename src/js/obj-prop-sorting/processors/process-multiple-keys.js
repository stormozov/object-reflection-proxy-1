import { sortAlphabetically } from '../sorting/alphabetical';
import { applyCustomSorting } from '../sorting/custom-sorting';
import { normalizeSortingOrder } from '../tools/normalize-sorting-order';

/** 
 * Основная обработка для объектов с несколькими ключами
 */
export const processMultipleKeys = (keys, obj, sortingOrder) => {
  const validOrder = normalizeSortingOrder(sortingOrder);
  return validOrder.length === 0
    ? sortAlphabetically(keys, obj)
    : applyCustomSorting(keys, obj, validOrder);
};
