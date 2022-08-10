const post = [
  {
    id: 1,
    title: "게시글 입니다.",
    nickname: "닉네임입니다.",
  },
];

exports.getAllPost = (req, res) => {
  res.json(post);
};
