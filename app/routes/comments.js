/*
 * comments.js
 * Copyright (C) 2013 diego <diego@diego-ThinkPad-W530>
 *
 * Distributed under terms of the MIT license.
 */
var CommentsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('comment');
    }
});

export default CommentsRoute;

