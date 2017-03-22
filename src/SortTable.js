import React, { Component } from 'react';
import TableHeader from './TableHeader';
import clone from 'clone';

class SortTable extends Component {
  constructor(props) {
    super(props);

    this.state = { records: this.props.initialRecords };
    this.sort = this.sort.bind(this);
  }

  wrap(array) {
    return array.map((item, i) => {
      return { key: item, position: i }
    });
  }

  unwrap(array) {
    return array.map(item => item.key);
  }

  getComparator(attr, order) {
    if (order === '^') {
      return function (a, b) {
        const diff = b.key[attr].localeCompare(a.key[attr]);
        if (diff === 0) {
          return a.position - b.position;
        }
        return diff;
      };
    } else {
      return function (a, b) {
        const diff = a.key[attr].localeCompare(b.key[attr]);
        if (diff === 0) {
          return a.position - b.position;
        }
        return diff;
      }
    }
  }

  sort(attr, order) {
    let { records } = clone(this.state);
    const comparator = this.getComparator(attr, order);
    records = this.wrap(records);
    records.sort(comparator);
    records = this.unwrap(records);

    this.setState({ records });
  }

  render() {
    const { records } = this.state;

    return (
        <table>
          <thead>
          <tr>
            <th>#</th>
            <TableHeader
                title="First Name"
                attr="firstName"
                onClick={this.sort} />
            <TableHeader
                title="Last Name"
                attr="lastName"
                onClick={this.sort} />
            <TableHeader
                title="Birth Date"
                attr="birthDate"
                onClick={this.sort} />
          </tr>
          </thead>

          <tbody>
          {records.map(this.renderRow)}
          </tbody>
        </table>
    )
  }

  renderRow(record, index) {
    return (
        <tr key={index}>
          <th>{index + 1}</th>
          <th>{record.firstName}</th>
          <th>{record.lastName}</th>
          <th>{record.birthDate}</th>
        </tr>
    );
  }
}

SortTable.defaultProps = {
  initialRecords: [
    { firstName: "Angus", lastName: "Young", birthDate: "1955-03-31" },
    { firstName: "Malcolm", lastName: "Young", birthDate: "1953-01-06" },
    { firstName: "George", lastName: "Young", birthDate: "1946-11-06" },
    { firstName: "Bon", lastName: "Scott", birthDate: "1946-07-09" },
    { firstName: "Phil", lastName: "Rudd", birthDate: "1954-05-19" },
    { firstName: "Cliff", lastName: "Williams", birthDate: "1949-12-14" }
  ]
};

export default SortTable;
