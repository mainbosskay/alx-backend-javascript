function cleanSet(set,startString) {
  const respParts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const setValue of set.values()) {
    if (typeof setValue === 'string' && setValue.startsWith(startString)) {
      const suffix = setValue.substring(startString.length);
      if (suffix && suffix !== setValue) {
        respParts.push(suffix);
      }
    }
  }
  return respParts.join('-');
}
export default cleanSet;
