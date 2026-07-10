export interface WorkspacePackage {
  name: string;
  path: string;
}

export async function listPackages(): Promise<WorkspacePackage[]> {
  return [];
}
