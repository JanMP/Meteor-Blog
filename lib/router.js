FlowRouter.route('/', {  
  subscriptions: function (params, queryParams) {
    this.register('posts', Meteor.subscribe('allPosts'));
  },
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'navbar', main: 'postsList' });
  },
  name: 'home'
});

FlowRouter.route('/post/:postId', {
  subscriptions: function (params, queryParams) {
    this.register('post', Meteor.subscribe('singlePost', params.postId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'navbar', main: 'postPage' });
  },
  name: 'post'
});

FlowRouter.route('/post/submit', {
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'navbar', main: 'postSubmit' });
  },
  name: 'submit'
});
