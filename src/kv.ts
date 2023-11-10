export type KV = {
  // we use only string for the value

  put(key: string, value: string): Promise<void>;

  put(
    key: string,
    value: string,
    options: {
      expiration?: number; // seconds since epoch
      expirationTtl?: number; // seconds from now
    },
  ): Promise<void>;

  get(key: string): Promise<string | undefined>;

  delete(key: string): Promise<void>;
};

export class MemoryKV implements KV {
  #data: { [key: string]: string } = {};

  async put(key: string, value: string): Promise<void> {
    this.#data[key] = value;
  }
  async putWithExpiration(
    key: string,
    value: string,
    options: { expiration?: number; expirationTtl?: number },
  ): Promise<void> {
    this.#data[key] = value;
    // TODO: implement the expiration
  }
  async get(key: string): Promise<string | undefined> {
    return this.#data[key];
  }

  async delete(key: string): Promise<void> {
    delete this.#data[key];
  }
}
