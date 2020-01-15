# verdaccio-sentry

> sentry loggin errors


## Usage

```
middlewares:
  audit:
    enabled: true
  sentry:
    dsn: https://xxxxxxxx@sentry.io/1111111
```

More info at [Configure Sentry](https://docs.sentry.io/error-reporting/configuration/?platform=javascript).

Feel free to contribute and add more properties if you need them.

---

## Development

See the [verdaccio contributing guide](https://github.com/verdaccio/verdaccio/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. 
Once you have completed that, use the following npm tasks.

  - `npm run build`

    Build a distributable archive

  - `npm run test`

    Run unit test

For more information about any of these commands run `npm run ${task} -- --help`.
