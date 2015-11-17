/**
 * Publish the data from the collection so we can subscribe to it
 * in the client
 */

Meteor.publish('allPosts', function(){
  return Posts.find({});
});

Meteor.publish('singlePost', function(postId){
  return Posts.find({_id: postId});
});
