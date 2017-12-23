import React from 'react'
import { components } from '../../loader'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

class component extends React.PureComponent {

  data = [
    {quarter: 1, earnings: 1},
    {quarter: 2, earnings: 2},
    {quarter: 3, earnings: 3},
    {quarter: 4, earnings: 0}
  ];

  render () {
    return (
      <components.Box>
        <h2>
          Feature: <i>chart</i>
        </h2>
        <p>Testing FormidableLabs Victory</p>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}
          animate={{ duration: 1000, easing: 'bounce' }}>
          <VictoryAxis tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}/>
          <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1}k`)}/>
          <VictoryBar data={this.data} x="quarter" y="earnings"
            style={{ data: { fill: 'blue', width: 10 } }} />
        </VictoryChart>
      </components.Box>
    )
  }
}

export default component
