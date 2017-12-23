import React from 'react'
import { components } from '../../loader'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
// import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'

class component extends React.PureComponent {

  data = [
    {name: 1, earnings: 1},
    {name: 2, earnings: 2},
    {name: 3, earnings: 3},
    {name: 4, earnings: 0}
  ];
  renderVictoryChart = () => {
    return (
        <VictoryChart width={730} height={250} theme={VictoryTheme.material} domainPadding={20}
        animate={{ duration: 1000, easing: 'bounce' }}>
        <VictoryAxis tickValues={[1, 2, 3, 4]}
          tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}/>
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1}k`)}/>
        <VictoryBar data={this.data} x="name" y="earnings"
          style={{ data: { fill: 'blue', width: 40 } }} />
      </VictoryChart>
    )
  }

  rechartData = [
    {name: 1, value: 1},
    {name: 2, value: 2},
    {name: 3, value: 3},
    {name: 4, value: 0}
  ];
  renderRechart = () => {
    return (
      <BarChart width={730} height={250} data={this.rechartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickFormatter={(x) => (`Quarter ${x}`)}/>
        <YAxis tickFormatter={(x) => (`$${x / 1}k`)}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#0000FF" />
      </BarChart>
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
  //     <XYPlot width={300} height={300}>
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

  render () {
    return (
      <components.Box>
        <h2>
          Testing <i>charts</i> libs
        </h2>
        <h3>Victory</h3>
        {this.renderVictoryChart()}
        <h3>react-vis</h3>
        {this.renderRechart()}
      </components.Box>
    )
  }
}

export default component
