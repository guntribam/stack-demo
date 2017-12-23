import React from 'react'
import { components } from '../../loader'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
// import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'
// import { BarChart } from 'react-d3'
import ChartistGraph from 'react-chartist'
import Trend from 'react-trend'

class component extends React.PureComponent {

  renderVictoryChart = () => {
    const data = [
      {name: 1, earnings: 1},
      {name: 2, earnings: 2},
      {name: 3, earnings: 3},
      {name: 4, earnings: 0}
    ]
    return (
      <div>
        <h3>Victory</h3>
        <VictoryChart width={730} height={250} theme={VictoryTheme.material} domainPadding={20}
        animate={{ duration: 1000, easing: 'bounce' }}>
          <VictoryAxis tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}/>
          <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1}k`)}/>
          <VictoryBar data={data} x="name" y="earnings"
            style={{ data: { fill: 'blue', width: 40 } }} />
        </VictoryChart>
      </div>
    )
  }

  renderRechart = () => {
    const rechartData = [
      {name: 1, value: 1},
      {name: 2, value: 2},
      {name: 3, value: 3},
      {name: 4, value: 0}
    ]
    return (
      <div>
        <h3>rechart</h3>
        <BarChart width={730} height={250} data={rechartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickFormatter={(x) => (`Quarter ${x}`)}/>
          <YAxis tickFormatter={(x) => (`$${x / 1}k`)}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0000FF" />
        </BarChart>
      </div>
    )
  }

  renderChartistChart = () => {
    const chartistData = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [ [1, 2, 4, 8, 6, -2, -1, -4, -6, -2] ]
    }
    const options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return index % 2 === 0 ? value : null
        }
      }
    }
    const type = 'Line'
    return (
      <div>
        <h3>ChartistGraph</h3>
        <ChartistGraph data={chartistData} options={options} type={type} />
      </div>
    )
  }

  renderTrendChart = () => {
    const trendData = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
    return (
      <div>
        <h3>react-trend</h3>
        <Trend
          smooth
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-out"
          data={trendData}
          gradient={['#00c6ff', '#F0F', '#FF0']}
          radius={10}
          strokeWidth={2}
          strokeLinecap={'round'}
        />
      </div>
    )
  }

  // reactVistData = [
  //   {x: 1, y: 1},
  //   {x: 2, y: 2},
  //   {x: 3, y: 3},
  //   {x: 4, y: 0}
  // ];
  // renderReactVis = () => {
  //   return (
  //     <XYPlot width={730} height={250}>
  //       <HorizontalGridLines />
  //       <VerticalGridLines />
  //       <XAxis title="X Axis" />
  //       <YAxis title="Y Axis" />
  //       <LineSeries data={this.data}/>
  //       <LineSeries data={null}/>
  //       <LineSeries curve={'curveMonotoneX'}
  //         style={{
  //           strokeDasharray: '2 2'
  //         }}
  //         data={this.data}
  //         strokeDasharray="7, 3"
  //         />
  //       <LineSeries
  //         className="fourth-series"
  //         data={this.data}/>
  //     </XYPlot>
  //   )
  // }

  // renderReactD3 = () => {
  //   const reactD3Data = [
  //     { 'name': 'Series A',
  //       'values': [{'x': 1, 'y': 1},
  //                  {'x': 2, 'y': 2},
  //                  {'x': 3, 'y': 3},
  //                  {'x': 4, 'y': 0}]
  //     }
  //   ]
  //
  //   return (
  //     <div>
  //       <BarChart data={reactD3Data} width={730} height={250} fill={'#3182bd'}
  //         title='react-d3'
  //         yAxisLabel='Label'
  //         xAxisLabel='Value'/>
  //     </div>
  //   )
  // }

  render () {
    return (
      <components.Box>
        <h2>
          Testing <i>charts</i> libs
        </h2>
        {this.renderVictoryChart()}
        {this.renderRechart()}
        {this.renderChartistChart()}
        {this.renderTrendChart()}
      </components.Box>
    )
  }
}

export default component
