import * as Sentry from '@sentry/node';
import { Logger, IPluginMiddleware, IBasicAuth, IStorageManager, PluginOptions } from '@verdaccio/types';
import { Router, Request, Response, NextFunction, Application } from 'express';

import { SentryConfig } from '../types/index';

export default class VerdaccioMiddlewarePlugin implements IPluginMiddleware<SentryConfig> {
  public logger: Logger;
  public dsn: string;
  public constructor(config: SentryConfig, options: PluginOptions<SentryConfig>) {
    this.dsn = config.dsn;
    this.logger = options.logger;
  }

  public register_middlewares(
    app: Application,
    auth: IBasicAuth<SentryConfig>,
    /* eslint @typescript-eslint/no-unused-vars: off */
    _storage: IStorageManager<SentryConfig>
  ): void {
    Sentry.init({ dsn: this.dsn });
  }
}
