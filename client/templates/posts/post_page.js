Template.postPage.helpers({
  getPost: function () {
    return Posts.findOne();
  }
});