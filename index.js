const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // chose port from here like 8080, 3001

server.use(middlewares); // Corrected the typo here
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
