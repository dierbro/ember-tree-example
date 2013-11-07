var Comment = DS.Model.extend({
  username: DS.attr("string"),
  postedAt: DS.attr("date"),
  content: DS.attr("string"),
  parentId: DS.attr("number"),
});
Comment.reopenClass({
  FIXTURES: [
    {"id": "1", "username": "Alice", "content": "comment-1", "parentId": null },
    {"id": "2", "username": "Bob", "content": "comment-2", "parentId": null},
    {"id": "3", "username": "Waldo", "content": "comment-1/3", "parentId": "1"},
    {"id": "4", "username": "Tom", "content": "comment-1/4", "parentId": "1"},
    {"id": "5", "username": "Alice", "content": "comment-1/3/5", "parentId": "3"},
    {"id": "6", "username": "Waldo", "content": "comment-2/6", "parentId": "2"},
  ]
});
export default Comment;

