const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    root: true,
  });
});

app.listen(3000, () => {
  console.log(`app listen on 3000`);
});
