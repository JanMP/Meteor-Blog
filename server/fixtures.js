if (Posts.find().count() === 0) {
  Posts.insert({
    title: "First post",
    content: "Content of the first post"
  });

  Posts.insert({
    title: "Second post",
    content: "Content of the second post"
  });

  Posts.insert({
    title: "Third post",
    content: "Content of the third post"
  });
};