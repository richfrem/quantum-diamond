// Keep heavy data out of the model: store + summarize.
export async function persistBlob(path: string, bytes: Uint8Array): Promise<string> {
  // write to workspace or object storage; return pointer/URI
  return path;
}

export function summarizeTabular(rows: any[], maxRows = 50) {
  // filter/aggregate here; return compact structured view
  return { rows: rows.slice(0, maxRows), stats: {/* … */} };
}