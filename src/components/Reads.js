import React, { Fragment, Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Reads extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    fetch(this.props.readme)
      .then(res => res.text())
      .then(post => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }
  
  componentDidUpdate() {
    fetch(this.props.readme)
      .then(res => res.text())
      .then(post => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }

  render() {
    const { post } = this.state;

    return (
      <Fragment>
        <div className="Reads">
            <ReactMarkdown source={post} />
        </div>
      </Fragment>
    );
  }
}

export default Reads;