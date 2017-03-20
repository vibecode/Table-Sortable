import React, { Component } from 'react';

class TableHeader extends Component {
  constructor(props) {
    super(props);

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(ev) {
    ev.preventDefault();
    this.props.onClick(this.props.attr);
  }

  render() {
    return (
        <th><a onClick={this.handleHeaderClick}>{this.props.title}</a></th>
    );
  }
}

export default TableHeader;
