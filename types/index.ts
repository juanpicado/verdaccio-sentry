import { Config } from '@verdaccio/types';

export interface SentryConfig extends Config {
  dsn: string;
}
