import React from 'react'
import { components } from '../../loader'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

class component extends React.PureComponent {

  data = [
    {name: '1º', earnings: 1},
    {name: '2º', earnings: 2},
    {name: '3º', earnings: 3},
    {name: '4º', earnings: 0}
  ];

  rechartData = [
    {name: 1, value: 1},
    {name: 2, value: 2},
    {name: 3, value: 3},
    {name: 4, value: 0}
  ];

  render () {
    return (
      <components.Box>
        <h2>
          Testing <i>charts</i> libs
        </h2>
        <h3>FormidableLabs Victory</h3>
        <VictoryChart width={730} height={250} theme={VictoryTheme.material} domainPadding={20}
          animate={{ duration: 1000, easing: 'bounce' }}>
          <VictoryAxis tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}/>
          <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1}k`)}/>
          <VictoryBar data={this.data} x="name" y="earnings"
            style={{ data: { fill: 'blue', width: 40 } }} />
        </VictoryChart>

        <h3>Recharts</h3>
        <BarChart width={730} height={250} data={this.rechartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickFormatter={(x) => (`Quarter ${x}`)}/>
          <YAxis tickFormatter={(x) => (`$${x / 1}k`)}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0000FF" />
        </BarChart>
      </components.Box>
    )
  }
}

export default component
