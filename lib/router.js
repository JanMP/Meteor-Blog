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

//it's not the autoform, it's the routing that causes trouble, /post/submit gets eaten
//by /post/:postId
//this works:
FlowRouter.route('/submit', {
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'navbar', main: 'postSubmit' });
  },
  name: 'submit'
});
