var ExtensionsAdminPage = require('promise?global!./ExtensionsAdminPage');

module.exports = {
  matches(slug, context) {
    return slug === '/extensions' && context.isFeatureEnabled('REACT_ITERATION_STATUS_PAGE');
  },

  initPage(navState) {
    return ExtensionsAdminPage().then(extensionsAdminPage => new extensionsAdminPage(navState).init());
  }
};