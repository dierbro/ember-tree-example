var App;

module('Acceptances - Comment', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(6);

  visit('/').then(function(){
    equal(find(".comments").length, 1);
    // Two root comments
    equal(find(".comments > .comment").length, 2);
    // First root comment has 3 children
    var firstRootComment = find(".comments > .comment").first();
    equal(firstRootComment.find(".comment").length, 3);
      var child1 = firstRootComment.find(".comment").first();
      equal(child1.find(".comment").length, 1);
      var child2 = firstRootComment.find(".comment").last();
      equal(child2.find(".comment").length, 0);
    // Last root comment has 1 child
    var lastRootComment = find(".comments > .comment").last();
    equal(lastRootComment.find(".comment").length, 1);
  });
});
