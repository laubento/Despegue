const app = require("./src/app.js");
const db = require("./src/db.js");

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port 3001");
  db();
});
