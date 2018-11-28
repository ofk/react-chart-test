import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { yAxes, data } from './constants';

export default class RechartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xAxis: 'x',
      yAxes,
      data: data.slice(0, data.length / 2),
    };
    console.time('rc1');
    console.time('rc2');
  }
  componentDidMount() {
    console.timeEnd('rc1');
    this.setState({ data });
  }
  componentDidUpdate() {
    console.timeEnd('rc2');
  }
  render() {
  	return (
      <LineChart width={600} height={300} data={this.state.data}>
        <XAxis dataKey={this.state.xAxis}/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        {this.state.yAxes.map((yAxis) => (
          <Line key={yAxis} type="monotone" dataKey={yAxis} isAnimationActive={false} dot={false} activeDot={false}/>
        ))}
      </LineChart>
    );
  }
}
