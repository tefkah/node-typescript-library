# Node.js Typescript Library Template

Very basic template for a Node.js library.

Uses

- `tsdown` for building
- `vitest` for testing
- `changesets` for version management and automated publishing
- `biome` for linting and formatting

## Usage

### Setup

```bash
pnpm install
```

### Test

```bash
pnpm test
```

### Benchmark

```bash
pnpm bench
```

### Build

```bash
pnpm build
```

## Release Process

This project uses changesets for version management and automated publishing.

### Making Changes

1. Make your code changes
2. Run `pnpm changeset` to create a changeset file
3. Select the type of change (patch/minor/major)
4. Write a description of the changes
5. Commit both your code changes and the changeset file

### Publishing

When changes are merged to main:

1. The Release workflow creates a PR with version bumps and CHANGELOG updates
2. Review and merge the Release PR
3. The workflow automatically publishes to npm

### Manual Publishing

To publish manually:

```bash
pnpm version
pnpm release
```

### Setup Requirements

For automated publishing, add the NPM_TOKEN secret to GitHub repository settings.
