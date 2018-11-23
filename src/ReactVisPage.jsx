import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries as Line,
} from 'react-vis';
import { yAxes, data } from './constants';

const lineStyle = { fill: 'none' };

const genData = (arr) => yAxes.map((yAxis) => arr.map((d) => ({ x: d.x, y: d[yAxis] })));
const data1 = genData(data.slice(0, data.length / 2));
const data2 = genData(data);

export default class ReactVisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1
    };
    console.time('1');
    console.time('2');
  }
  componentDidMount() {
    console.timeEnd('1');
    this.setState({ data: data2 });
  }
  componentDidUpdate() {
    console.timeEnd('2');
  }
  render() {
  	return (
      <XYPlot width={600} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        {this.state.data.map((d, i) => <Line key={i} style={lineStyle} data={d}/>)}
      </XYPlot>
    );
  }
}
