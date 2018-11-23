import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { yAxes, data } from './constants';

const lineStyle = { fill: 'none' };

const genData = (arr) => yAxes.map((yAxis) => ({ id: yAxis, color: 'blue', data: arr.map((d) => ({ x: d.x, y: d[yAxis] })) }));
const data1 = genData(data.slice(0, data.length / 2));
const data2 = genData(data);

export default class NivoPage extends React.Component {
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
      <div style={{ width: '600px', height: '300px' }}>
        <ResponsiveLine
          data={this.state.data}
          margin={{
            top: 50,
            right: 110,
            bottom: 50,
            left: 60
          }}
          xScale={{
            type: 'point'
          }}
          yScale={{
            type: 'linear',
            stacked: false,
            min: 'auto',
            max: 'auto'
          }}
          minY="auto"
          maxY="auto"
          stacked={true}
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          enableDots={false}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={false}
          motionStiffness={90}
          motionDamping={15}
          legends={[]}
        />
      </div>
    );
  }
}
