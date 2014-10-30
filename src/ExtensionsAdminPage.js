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
    
    this.appContext = Ext.create('Rally.app.Context', {
      initialValues: {
        user: almContext.getUser(),
        subscription: almContext.getSubscription(),
        featureToggles: Rally.alm.FeatureToggle,
        permissions: almContext.getPermissions(),
        workspace: almContext.getWorkspace(),
        project: almContext.getProject(),
        projectScopeUp: almContext.getProjectScopeUp(),
        projectScopeDown: almContext.getProjectScopeDown()
      }
    });
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
      navState: this.navState,
      appContext: this.appContext,
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