function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (caughtErr) {
    queue.push(String(caughtErr));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
export default guardrail;
