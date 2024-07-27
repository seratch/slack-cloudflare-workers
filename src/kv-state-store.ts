import { StateStore } from "slack-edge";
import { KVNamespace } from "@cloudflare/workers-types";

export class KVStateStore implements StateStore {
  #storage: KVNamespace;

  constructor(namespace: KVNamespace) {
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
