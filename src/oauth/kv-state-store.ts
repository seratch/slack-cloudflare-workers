import { KV } from "../utility/kv";
import { StateStore } from "./state-store";

export class KVStateStore implements StateStore {
  #storage: KV;

  constructor(namespace: KV) {
    this.#storage = namespace;
  }

  async issueNewState(): Promise<string> {
    const state = crypto.randomUUID();
    await this.#storage.putWithExpiration(state, "valid", {
      expirationTtl: 300,
    });
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
