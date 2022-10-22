export interface Worker {
  execute: (body: unknown) => Promise<void>;
}
