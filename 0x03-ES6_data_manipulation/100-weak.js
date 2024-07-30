export const weakMap = new WeakMap();

const MAX_CALLS_API = 5;

export function queryAPI(apiEndpoint) {
  if (!weakMap.has(apiEndpoint)) {
    weakMap.set(apiEndpoint, 0);
  }
  weakMap.set(apiEndpoint, weakMap.get(apiEndpoint) + 1);
  if (weakMap.get(apiEndpoint) >= MAX_CALLS_API) {
    throw new Error('Endpoint load is high');
  }
}
