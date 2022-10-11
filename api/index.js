const app = require("./src/app");
const db = require("./src/db");

app.listen(3000, () => {
  console.log("listening on port 3000");
  db();
});
