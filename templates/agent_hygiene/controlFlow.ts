// Push loops/polling into code, not the model.
export async function waitForSlack(predicate: () => Promise<boolean>, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await predicate()) return true;
    await new Promise(r => setTimeout(r, 2000));
  }
  return false;
}