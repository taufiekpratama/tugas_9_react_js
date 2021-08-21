import React, { Component } from "react";

import { Collapse, Button } from "react-bootstrap";

class ShowCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: true,
    };
  }
  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.setState({ buka: !this.state.buka })}
        >
          Toggle
        </Button>
        <Collapse in={this.state.buka}>
          <p>
            Akses Sport V1.0
          </p>
        </Collapse>
      </div>
    );
  }
}

export default ShowCollapse;
