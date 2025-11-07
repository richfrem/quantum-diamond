// JIT tool registry: no context-stuffing of schemas.
export type Tool = { name: string; schema: unknown; run: (input: any) => Promise<any> };

export async function discoverTools(dir = "./tools"): Promise<Record<string, Tool>> {
  const reg: Record<string, Tool> = {};
  // Pseudo: load *.tool.(ts|js) modules; each exports { name, schema, run }
  // Avoid loading full schemas into prompts; feed only names/caps until selected.
  return reg;
}

export function selectTools(reg: Record<string, Tool>, needs: string[]): Tool[] {
  return needs.map(n => reg[n]).filter(Boolean);
}