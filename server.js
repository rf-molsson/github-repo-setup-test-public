// Deliberately vulnerable (code injection) to test code scanning; never run.
import http from "node:http";

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    res.end(String(eval(url.searchParams.get("expr"))));
  })
  .listen(3000);
