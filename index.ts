import { serve } from "https://deno.land/std@0.98.0/http/server.ts";

const server = serve({ port: 8080 });
console.log(`HTTP webserver running.`);

for await (const request of server) {
  let bodyContent = "Caddy server active, safe and secure.";
  request.respond({ status: 200, body: bodyContent });
}
