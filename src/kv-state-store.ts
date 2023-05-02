import { KV } from "./kv";
import { StateStore } from "slack-edge";

export class KVStateStore implements StateStore {
  #storage: KV;

  constructor(namespace: KV) {
    this.#storage = namespace;
  }

  async issueNewState(): Promise<string> {
    const state = crypto.randomUUID();
    await this.#storage.put(state, "valid", { expirationTtl: 300 });
    return state;
  }

  async consume(state: string): Promise<boolean> {
    const found = await this.#storage.get(state);
    if (found === "valid") {
      await this.#storage.delete(state);
      return true;
    }
    return false;
  }
}
