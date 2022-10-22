export interface Worker<T = Record<string, unknown>> {
  execute(data: T): Promise<void>;
}
