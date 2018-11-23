import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    return <p>App</p>;
  }
}

const rootElem = document.querySelector('#root');
ReactDOM.render(<App/>, rootElem);
