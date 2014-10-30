var _ = require('lodash');
var React = require('react');

var AlmUtils = require('alm-utils');
var Page = require('../components/Page.react');

class ExtensionsAdminPage {

  constructor(navState) {
    this.navState = navState;
  }

  init() {
    var almContext = Rally.environment.getContext();
    
    
  }

  render(el) {
    React.renderComponent(this._createPageComponent(), el);
  }

  destroy(el) {
    React.unmountComponentAtNode(el);
  }

  rerender(el, newNavState) {
    this.destroy(el);
    this.navState = newNavState;
    this.render(el);
  }

  _createPageComponent() {
    return Page({
      navState: this.navState
    });
  }

  _subscribeToObjectChanges() {
    
  }

  _unsubscribeToObjectChanges() {
    
  }

  _onObjectChange() {
    
  }
}


module.exports = ExtensionsAdminPage;