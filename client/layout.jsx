import React from 'react';

const Layout = React.createClass({
  propTypes: {
    detail: React.PropTypes.node.isRequired,
  },

  render() {
    return (
      <div className="container-fluid">
        {this.props.detail}
      </div>
    );
  },
});

export default Layout;
