import React from 'react';
import Plotly from 'plotly.js-dist';
import { yAxes, data } from './constants';

const genData = (arr) => yAxes.map((yAxis) => ({
  x: arr.map((d) => d.x),
  y: arr.map((d) => d[yAxis]),
  mode: 'lines',
}));
const data1 = genData(data.slice(0, data.length / 2));
const data2 = genData(data);

export default class PlotlyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1
    };
    console.time('p1');
    console.time('p2');
  }
  componentDidMount() {
    Plotly.newPlot('plotly', this.state.data);
    console.timeEnd('p1');
    this.setState({ data: data2 });
  }
  componentDidUpdate() {
    Plotly.update('plotly', this.state.data);
    console.timeEnd('p2');
  }
  render() {
 	return <div id="plotly" style={{ width: '600px', height: '300px' }}/>;
  }
}
