/** @jsx React.DOM */
var _ = require('lodash');
var React = require('react');


module.exports = React.createClass({
  displayName: 'alm-page-extensions-admin/Page',

  yPaddingOffset: 25,

  render() {
    var almContext = Rally.environment.getContext();

    var content;
    
    content = <div className="content" ref="appContainer"/>;
 
    return (
      <div className="portlet iteration-track-experience">
        { content }
      </div>
    );
  },

  componentDidMount() {
    
    
    
  },

  componentWillUnmount() {
    
  }

 
});