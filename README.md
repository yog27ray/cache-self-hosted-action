# cache-self-hosted-action

[comment]: <> ([![GitHub Actions status]&#40;https://github.com/yog27ray/mongo-inmemory-action/workflows/mongo-inmemory-action%20CI/badge.svg&#41;]&#40;https://github.com/yog27ray/mongo-inmemory-action/actions&#41; [![GitHub Releases]&#40;https://img.shields.io/github/release/yog27ray/mongo-inmemory-action.svg&#41;]&#40;https://github.com/yog27ray/mongo-inmemory-action/releases&#41;)

This action allows caching dependencies and build outputs to improve workflow execution time.

## Inputs

### `path`

**Required:** Path of file or directory to cache and restore.

### `key`

**Required:** An explicit key for restoring and saving the cache.

### `prefix`

**Optional:** Cache storage hash key.

## Example usage

```yaml
on: [push]

jobs:
  test_cache_build:
    runs-on: self-hosted
    name: Test Cache Action
    steps:
      - name: Cache Primes
        id: cache-primes
        uses: yog27ray/cache-self-hosted-action@v0.0.1
        with:
          path: prime-numbers
          key: ${{ runner.os }}-primes
      - name: Generate Prime Numbers
        run: /generate-primes.sh -d prime-numbers
      - name: Use Prime Numbers
        run: /primes.sh -d prime-numbers
```
