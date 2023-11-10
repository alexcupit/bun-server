import _ from 'lodash';

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    if (req.method === 'POST') {
      const body = await req.json();

      if (!body.text) {
        return new Response('Missing text on POST body', { status: 404 });
      }

      const text_snake = _.snakeCase(body.text);

      return new Response(JSON.stringify({ text_snake }), { status: 200 });
    }
    return new Response('Nothing to do here');
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
