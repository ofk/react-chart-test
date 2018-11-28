import React from 'react';
import { Chart } from 'react-google-charts';
import { yAxes, data } from './constants';

const lineStyle = { fill: 'none' };

const genData = (arr) => ([
  ['x', ...yAxes],
  ...arr.map((d) => [d.x, ...yAxes.map((yAxis) => d[yAxis])]),
]);
const data1 = genData(data.slice(0, data.length / 2));
const data2 = genData(data);

class Loading extends React.Component {
  componentWillUnmount() {
    console.timeEnd('gc0');
  }
  render() {
    return <div>Loading Chart</div>;
  }
}

export default class GoogleChartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1
    };
    console.time('gc0');
    console.time('gc1');
    console.time('gc2');
  }
  componentDidMount() {
    console.timeEnd('gc1');
    this.setState({ data: data2 });
  }
  componentDidUpdate() {
    console.timeEnd('gc2');
  }
  render() {
 	return (
      <Chart
        width="600px"
        height="300px"
        chartType="LineChart"
        loader={<Loading/>}
        data={this.state.data}
        options={{
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: 'Popularity',
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    );
  }
}
