const app = require("./Src/app.js");
const db = require("./Src/db.js");

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port 3001");
  db();
});