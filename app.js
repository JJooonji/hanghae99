const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(PORT || 6000, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
