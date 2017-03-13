import React, { Component } from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: this.props.initialRecords };
  }

  render() {
    let { records } = this.state;
    return (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
          </tr>
          </thead>
          <tbody>
          {records.map(this.renderRow)}
          </tbody>
        </Table>
    );
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

SortableTable.defaultProps = {
  initialRecords: [
    { firstName: "Angus", lastName: "Young", birthDate: "1955-03-31" },
    { firstName: "Malcolm", lastName: "Young", birthDate: "1953-01-06" },
    { firstName: "George", lastName: "Young", birthDate: "1946-11-06" },
    { firstName: "Bon", lastName: "Scott", birthDate: "1946-07-09" },
    { firstName: "Phil", lastName: "Rudd", birthDate: "1954-05-19" },
    { firstName: "Cliff", lastName: "Williams", birthDate: "1949-12-14" }
  ]
};