const createError = require("http-errors");

const post = [
  {
    id: 1,
    title: "게시글 입니다.",
    nickname: "닉네임입니다.",
  },
];

exports.getAllPost = (req, res, next) => {
  res.json(post);
};

exports.getPost = (req, res, next) => {
  const foundPost = post.find(
    (element) => element.id === Number(req.params.id)
  );
  if (!foundPost) {
    return next(createError(404, "Not Found"));
  }
  res.json(foundPost);
};
