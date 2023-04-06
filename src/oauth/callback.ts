import { Installation } from "./installation";

export type BeforeInstallation = (
  req: Request
) => Promise<Response | undefined | void>;

export type AfterInstallation = (
  installation: Installation,
  req: Request
) => Promise<Response | undefined | void>;
