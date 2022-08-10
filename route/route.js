const express = require("express");
const router = express.Router();

const post = [
  {
    id: 1,
    title: "게시글 입니다.",
    nickname: "닉네임입니다.",
  },
];

router.get("/", (req, res, next) => {
  res.json(post);
});

module.exports = router;
