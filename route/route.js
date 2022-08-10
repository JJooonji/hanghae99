const express = require("express");
const router = express.Router();
const post = require("../controller/post");
// const post = [
//   {
//     id: 1,
//     title: "게시글 입니다.",
//     nickname: "닉네임입니다.",
//   },
// ];

router.get("/", post.getAllPost);
module.exports = router;
