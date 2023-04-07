/**
 * Refer to https://developers.cloudflare.com/workers/runtime-apis/fetch-event/
 */
export interface ExecutionContext {
  /**
   * The waitUntil command extends the lifetime of the "fetch" event. It accepts a Promise-based task which the Workers runtime will execute before the handler terminates but without blocking the response. For example, this is ideal for caching responses or handling logging.
   *
   * With the Service Worker format, waitUntil is available within the event because it is a native FetchEvent property.
   *
   * With the Module Worker format, waitUntil is moved and available on the context parameter object.
   */
  waitUntil(promise: Promise<any>): void;

  /**
   * The passThroughOnException command prevents a runtime error response when the Worker script throws an unhandled exception. Instead, the script will fail open, which will proxy the request to the origin server as though the Worker was never invoked.
   *
   * To prevent JavaScript errors from causing entire requests to fail on uncaught exceptions, passThroughOnException() causes the Workers runtime to yield control to the origin server.
   *
   * With the Service Worker format, passThroughOnException is added to the FetchEvent interface, making it available within the event.
   *
   * With the Module Worker format, passThroughOnException is available on the context parameter object.
   */
  passThroughOnException(): void;
}
