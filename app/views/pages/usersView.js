import $ from 'jquery';
import Backbone from 'backbone';
import usersTemplate from '../../templates/pages/users.html';
import userItemTemplate from '../../templates/items/userItem.html';

const UserModel = Backbone.Model.extend({
  defaults: {
  },
});

const UserCollection = Backbone.Collection.extend({
  model: UserModel,
});

const UserView = Backbone.View.extend({
  tagName: 'li',
  className: 'user',
  render() {
    this.$el.html(userItemTemplate(this.model.attributes));
    return this;
  },
});

const UsersView = Backbone.View.extend({
  initialize() {
    $('.app').addClass('loading');
    const userCollection = new UserCollection();
    userCollection.fetch({
      url: 'http://jsonplaceholder.typicode.com/users',
      success: () => {
        $('.app').removeClass('loading');
      },
    });
    userCollection.on('add', (model) => {
      const userView = new UserView({ model });
      // userView.render().$el.appendTo('.users');
      this.$el.find('.users').append(userView.render().el);
    });
  },
  render() {
    this.$el.html(usersTemplate());
    return this;
  },
});

export default UsersView;
