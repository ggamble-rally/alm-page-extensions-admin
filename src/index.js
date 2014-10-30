var ExtensionsAdminPage = require('promise?global!ExtensionsAdminPage');

module.exports = {
  matches(slug, context) {
    return slug === '/extensions' && true;
  },

  initPage(navState) {
    return ExtensionsAdminPage().then(extensionsAdminPage => new extensionsAdminPage(navState).init());
  }
};