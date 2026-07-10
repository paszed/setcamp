export class WorkspaceNotFoundError extends Error {
  public constructor() {
    super("Unable to locate pnpm-workspace.yaml.");

    this.name = "WorkspaceNotFoundError";
  }
}
