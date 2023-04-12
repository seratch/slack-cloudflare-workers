export interface MessageMetadata<T extends string = string> {
  event_type: T;
  event_payload: {
    [key: string]:
      | string
      | number
      | boolean
      | MessageMetadataEventPayload
      | MessageMetadataEventPayload[];
  };
}
export interface MessageMetadataEventPayload {
  [key: string]: string | number | boolean;
}
