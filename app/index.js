import $ from 'jquery';
import Backbone from 'backbone';
import './styles/style.styl';
import navLinkView from './views/NavLinkView';

Backbone.history.start({/*  pushState: true */});

$('.nav').html(navLinkView.render().el);
