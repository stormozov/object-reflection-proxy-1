/** 
 * Обработка указанного порядка сортировки
 */
export const processSortingOrder = (order, remainingKeys, result, obj) => {
  for (const key of order) {
    if (remainingKeys.has(key)) {
      result.push({ key, value: obj[key] });
      remainingKeys.delete(key);
    }
  }
};
