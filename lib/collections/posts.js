Posts = new Mongo.Collection('posts');

var Schemas = {};

Schemas.Post = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Content",
  }
});

Posts.attachSchema(Schemas.Post);
