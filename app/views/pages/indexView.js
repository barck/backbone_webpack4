import Backbone from 'backbone';
import indexTemplate from '../../templates/pages/index.html';

const IndexView = Backbone.View.extend({
  render() {
    this.$el.html(indexTemplate());
    return this;
  },
});

export default IndexView;
