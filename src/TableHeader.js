import React, { Component } from 'react';

class TableHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { order: null };

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.setOrder = this.setOrder.bind(this);
  }

  setOrder() {
    const { order } = this.state;

    if (order == null || order === 'v') {
      this.setState({ order: '^' });
    } else {
      this.setState({ order: 'v' });
    }
  }

  handleHeaderClick(ev) {
    ev.preventDefault();
    this.setOrder();
    this.props.onClick(this.props.attr, this.state.order);
  }

  render() {
    let direction;
    if (this.state.order) {
      direction = " " + this.state.order;
    }

    return (
        <th>
          <a onClick={this.handleHeaderClick}>{this.props.title}</a>
          {direction}
        </th>
    );
  }
}

export default TableHeader;
