const express = require("express");
const app = express();
const PORT = process.env.PORT;
const route = require("./route/route");

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api",route);


app.listen(PORT || 6000, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
