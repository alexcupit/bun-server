# bun-server

This was a timed challenge to explore the features of `Bun` and set up a simple server that uses `_lodash` to return a transform a string.

To install dependencies:

```bash
bun install
```

I've created two different servers, firstly using `Bun.serve` method followed by the express like library `bunrest`

Both servers will accept a `POST` request with a payload as follows:

```
{"text": "a simple string"}
```

## Bun.serve

To run:

```bash
bun run index.ts
```

## Bunrest

To run:

```
bun run bunrest.ts
```

This server will also accept a simple get request.

This project was created using `bun init` in bun v1.0.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
