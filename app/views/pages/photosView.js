import $ from 'jquery';
import Backbone from 'backbone';
import photosTemplate from '../../templates/pages/photos.html';
import photoItemTemplate from '../../templates/items/photoItem.html';

const PhotoModel = Backbone.Model.extend({

});

const PhotoView = Backbone.View.extend({
  tagName: 'li',
  className: 'photo',
  render() {
    this.$el.html(photoItemTemplate(this.model.attributes));
    return this;
  },
});

const PhotoCollection = Backbone.Collection.extend({
  model: PhotoModel,
});

const PhotosView = Backbone.View.extend({
  initialize() {
    $('.app').addClass('loading');
    const photoCollection = new PhotoCollection();
    // photoCollection.fetch({'url': 'http://jsonplaceholder.typicode.com/photos?_limit=1000'});
    photoCollection.fetch({
      url: 'http://jsonplaceholder.typicode.com/photos?_limit=5000',
      success: () => {
        $('.app').removeClass('loading');
      },
    });
    photoCollection.on('add', (model) => {
      const photoView = new PhotoView({ model });
      photoView.render().$el.appendTo('.photos');
      // this.$el.find('.photos').append(photoView.render().el);
      // photoView.render().$el.appendTo('.photos');
    });
  },
  render() {
    this.$el.html(photosTemplate());
    return this;
  },
});

export default PhotosView;
