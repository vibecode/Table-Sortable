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

    if (order == null || order === 'down') {
      this.setState({ order: 'up' });
    } else {
      this.setState({ order: 'down' });
    }
  }

  handleHeaderClick(ev) {
    ev.preventDefault();
    this.setOrder();
    this.props.onClick(this.props.attr, this.state.order);
  }

  render() {
    let direction;

    const orderIcon = new Map([
        ['up', '\u25b2'],
        ['down', '\u25bc'],
    ]);

    if (this.state.order) {
      direction = " " + orderIcon.get(this.state.order);
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
